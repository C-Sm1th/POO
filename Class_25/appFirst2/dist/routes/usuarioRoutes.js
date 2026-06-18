"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
const router = (0, express_1.Router)();
router.post("/", UsuarioController_1.default.crear);
router.get("/listar", UsuarioController_1.default.listar);
// router.get("/.id", UsuarioController.obtenerPorId);
router.put("/.id", UsuarioController_1.default.actualizar);
router.delete("/.id", UsuarioController_1.default.eliminar);
exports.default = router;
//# sourceMappingURL=usuarioRoutes.js.map