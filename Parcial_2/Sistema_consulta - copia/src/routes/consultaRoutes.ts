import { Router } from "express";
import ConsultaController from "../controllers/ConsultaController";

const router = Router();

router.post("/", ConsultaController.crear);
router.get("/", ConsultaController.listar);
router.get("/:id", ConsultaController.obtenerPorId);
router.put("/:id", ConsultaController.actualizar);
router.delete("/:id", ConsultaController.eliminar);

export default router;