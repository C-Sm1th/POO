import { Request, Response } from "express";
import Database from "../config/database";
import Consulta from "../models/Consulta";

class ConsultaController {

      // Método para verificacion de horario laboral
    private esHoraLaboral(hora: string): boolean {
        const [horas = 0, minutos = 0] = hora.split(":").map(Number);

        const totalMinutos = horas * 60 + minutos;

        const inicio = 8 * 60;   // 08:00
        const fin = 17 * 60;     // 17:00

        return totalMinutos >= inicio && totalMinutos < fin;
    }

    // Crear una consulta verificando choques de horario
    public crear = async (req: Request, res: Response) => {
        const { paciente, fecha, hora, doctorId } = req.body;

        //validacion de horario laboral
        if (!this.esHoraLaboral(hora)){
            return res.status(400).json({
                mensaje: "La consulta tiene que estar dentro del horario laboral (08:00 - 17:00)"
            });
        }
    

        const DURACION_CONSULTA = 30; // minutos (regla de negocio)

        const consulta = new Consulta(paciente, fecha, hora, doctorId);

        const db = Database.getInstance().getConnection();

        //  Verificar si existe una consulta en un horario cercano
        const [conflictos]: any = await db.query(
            `
            SELECT * FROM consultas
            WHERE doctor_id = ?
              AND fecha = ?
              AND (
                hora < ADDTIME(?, SEC_TO_TIME(? * 60))
                AND ADDTIME(hora, SEC_TO_TIME(? * 60)) > ?
              )
            `,
            [
                doctorId,
                fecha,
                hora,
                DURACION_CONSULTA,
                DURACION_CONSULTA,
                hora
            ]
        );

        if (conflictos.length > 0) {
            return res.status(400).json({
                mensaje: "El doctor ya tiene una consulta en un horario cercano"
            });
        }

        // Insertar consulta si no hay conflicto
        try {
            await db.query(
                `
                INSERT INTO consultas (paciente, fecha, hora, doctor_id)
                VALUES (?, ?, ?, ?)
                `,
                [
                    consulta.getPaciente(),
                    consulta.getFecha(),
                    consulta.getHora(),
                    consulta.getDoctorId()
                ]
            );

            res.json({ mensaje: "Consulta creada correctamente" });

        } catch (error) {
            res.status(400).json({
                mensaje: "Error al crear la consulta"
            });
        }
    }

    // Listar todas las consultas con el nombre del doctor
    public listar = async (req: Request, res: Response) => {
        const db = Database.getInstance().getConnection();

        const [rows] = await db.query(`
            SELECT c.id, c.paciente, c.fecha, c.hora, d.nombre AS doctor
            FROM consultas c
            JOIN doctores d ON c.doctor_id = d.id
            ORDER BY c.fecha, c.hora
        `);

        res.json(rows);
    }

    // Obtener una consulta por ID
    public obtenerPorId = async (req: Request, res: Response) => {
        const { id } = req.params;
        const db = Database.getInstance().getConnection();

        const [rows]: any = await db.query(
            "SELECT * FROM consultas WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ mensaje: "Consulta no encontrada" });
        }

        res.json(rows[0]);
    }


    // Eliminar una consulta
    public eliminar = async (req: Request, res: Response) => {
        const { id } = req.params;
        const db = Database.getInstance().getConnection();

        const [result]: any = await db.query(
            "DELETE FROM consultas WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Consulta no encontrada" });
        }

        res.json({ mensaje: "Consulta eliminada correctamente" });
    }
}

export default new ConsultaController();