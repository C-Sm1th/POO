"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultaController_1 = __importDefault(require("../controllers/ConsultaController"));
const router = (0, express_1.Router)();
router.post("/", ConsultaController_1.default.crear);
router.get("/", ConsultaController_1.default.listar);
router.get("/:id", ConsultaController_1.default.obtenerPorId);
router.put("/:id", ConsultaController_1.default.actualizar);
router.delete("/:id", ConsultaController_1.default.eliminar);
exports.default = router;
//# sourceMappingURL=consultaRoutes.js.map