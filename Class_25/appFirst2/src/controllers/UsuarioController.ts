import { Request, Response } from "express";
import Database from "../config/database";
import Usuario from "../models/Usuario";

class UsuarioController {

    public async crear(req: Request, res: Response) {
        const { nombre, email } = req.body;

        const usuario = new Usuario(nombre, email);

        const db = Database.getInstance().getConnection();

        await db.query(
            "INSERT INTO usuarios(nombre, email) VALUES (?, ?)",
            [usuario.getNombre(), usuario.getEmail()]
        );

        res.json({ mensaje: "Usuario creado" });
    }

    public async listar(req: Request, res: Response) {
        const db = Database.getInstance().getConnection();

        const [rows] = await db.query("SELECT * FROM usuarios");

        res.json(rows);
    }

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre, email } = req.body;

        const db = Database.getInstance().getConnection();

        const [result]: any = await db.query(
            "UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?",
            [nombre, email, id]
        )

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado"})
        }

        res.json({ mensaje: "Usuario actualizado correctamente"});
    }

    public async eliminar(req: Request, res: Response) {
        const { id } = req.params;

        const db = Database.getInstance().getConnection();

        const [result]: any = await db.query(
            "DELETE FROM usuarios WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" })
        }

        res.json({mensaje: "Usuario eliminado correctamente"})
    }


}

export default new UsuarioController();