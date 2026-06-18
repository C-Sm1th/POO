import { Request, Response } from "express";
import Database from "../config/database";
import Consulta from "../models/Consulta";

class ConsultaController {

    // Crear una consulta verificando choques de horario
    public async crear(req: Request, res: Response) {
        const { paciente, fecha, hora, doctorId } = req.body;

        const DURACION_CONSULTA = 30; // minutos (regla de negocio)

        const consulta = new Consulta(paciente, fecha, hora, doctorId);

        const db = Database.getInstance().getConnection();

        // 🔎 Verificar si existe una consulta en un horario cercano
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

        // ✅ Insertar consulta si no hay conflicto
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
    public async listar(req: Request, res: Response) {
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
    public async obtenerPorId(req: Request, res: Response) {
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

    // Actualizar una consulta (también valida horarios cercanos)
    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { paciente, fecha, hora, doctorId } = req.body;

        const DURACION_CONSULTA = 30;

        const db = Database.getInstance().getConnection();

        // 🔎 Validar choque de horario excluyendo la consulta actual
        const [conflictos]: any = await db.query(
            `
            SELECT * FROM consultas
            WHERE doctor_id = ?
              AND fecha = ?
              AND id <> ?
              AND (
                hora < ADDTIME(?, SEC_TO_TIME(? * 60))
                AND ADDTIME(hora, SEC_TO_TIME(? * 60)) > ?
              )
            `,
            [
                doctorId,
                fecha,
                id,
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

        const [result]: any = await db.query(
            `
            UPDATE consultas
            SET paciente = ?, fecha = ?, hora = ?, doctor_id = ?
            WHERE id = ?
            `,
            [paciente, fecha, hora, doctorId, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Consulta no encontrada" });
        }

        res.json({ mensaje: "Consulta actualizada correctamente" });
    }

    // Eliminar una consulta
    public async eliminar(req: Request, res: Response) {
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