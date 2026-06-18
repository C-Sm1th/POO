"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const Consulta_1 = __importDefault(require("../models/Consulta"));
class ConsultaController {
    async crear(req, res) {
        const { paciente, fecha, hora, doctorId } = req.body;
        const consulta = new Consulta_1.default(paciente, fecha, hora, doctorId);
        const db = database_1.default.getInstance().getConnection();
        try {
            await db.query("INSERT INTO consultas(paciente, fecha, hora, doctor_id) VALUES (?, ?, ?, ?)", [
                consulta.getPaciente(),
                consulta.getFecha(),
                consulta.getHora(),
                consulta.getDoctorId()
            ]);
            res.json({ mensaje: "Consulta creada correctamente" });
        }
        catch (error) {
            res.status(400).json({
                mensaje: "El doctor ya tiene una consulta en ese horario"
            });
        }
    }
    async listar(req, res) {
        const db = database_1.default.getInstance().getConnection();
        const [rows] = await db.query(`
            SELECT c.id, c.paciente, c.fecha, c.hora, d.nombre AS doctor
            FROM consultas c
            JOIN doctores d ON c.doctor_id = d.id
        `);
        res.json(rows);
    }
    async obtenerPorId(req, res) {
        const { id } = req.params;
        const db = database_1.default.getInstance().getConnection();
        const [rows] = await db.query("SELECT * FROM consultas WHERE id = ?", [id]);
        if (rows.length === 0) {
            return res.status(404).json({ mensaje: "Consulta no encontrada" });
        }
        res.json(rows[0]);
    }
    async actualizar(req, res) {
        const { id } = req.params;
        const { paciente, fecha, hora, doctorId } = req.body;
        const db = database_1.default.getInstance().getConnection();
        try {
            const [result] = await db.query(`UPDATE consultas 
                 SET paciente = ?, fecha = ?, hora = ?, doctor_id = ?
                 WHERE id = ?`, [paciente, fecha, hora, doctorId, id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ mensaje: "Consulta no encontrada" });
            }
            res.json({ mensaje: "Consulta actualizada correctamente" });
        }
        catch (error) {
            res.status(400).json({
                mensaje: "Conflicto de horario para el doctor"
            });
        }
    }
    async eliminar(req, res) {
        const { id } = req.params;
        const db = database_1.default.getInstance().getConnection();
        const [result] = await db.query("DELETE FROM consultas WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Consulta no encontrada" });
        }
        res.json({ mensaje: "Consulta eliminada correctamente" });
    }
}
exports.default = new ConsultaController();
//# sourceMappingURL=ConsultaController.js.map