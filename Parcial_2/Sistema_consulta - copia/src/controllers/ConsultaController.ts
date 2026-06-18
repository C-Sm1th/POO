import { Request, Response } from "express";
import Database from "../config/database";
import Consulta from "../models/Consulta";

class ConsultaController {

    public async crear(req: Request, res: Response) {
        const { paciente, fecha, hora, doctorId } = req.body;
        const consulta = new Consulta(paciente, fecha, hora, doctorId);

        const db = Database.getInstance().getConnection();

        try {
            await db.query(
                "INSERT INTO consultas(paciente, fecha, hora, doctor_id) VALUES (?, ?, ?, ?)",
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
                mensaje: "El doctor ya tiene una consulta en ese horario"
            });
        }
    }

    public async listar(req: Request, res: Response) {
        const db = Database.getInstance().getConnection();

        const [rows] = await db.query(`
            SELECT c.id, c.paciente, c.fecha, c.hora, d.nombre AS doctor
            FROM consultas c
            JOIN doctores d ON c.doctor_id = d.id
        `);

        res.json(rows);
    }

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

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { paciente, fecha, hora, doctorId } = req.body;

        const db = Database.getInstance().getConnection();

        try {
            const [result]: any = await db.query(
                `UPDATE consultas 
                 SET paciente = ?, fecha = ?, hora = ?, doctor_id = ?
                 WHERE id = ?`,
                [paciente, fecha, hora, doctorId, id]
            );

            if (result.affectedRows === 0) {
                return res.status(404).json({ mensaje: "Consulta no encontrada" });
            }

            res.json({ mensaje: "Consulta actualizada correctamente" });
        } catch (error) {
            res.status(400).json({
                mensaje: "Conflicto de horario para el doctor"
            });
        }
    }

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