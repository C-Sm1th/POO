import { Request, Response } from "express";
declare class UsuarioController {
    crear(req: Request, res: Response): Promise<void>;
    listar(req: Request, res: Response): Promise<void>;
    actualizar(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    eliminar(req: Request, res: Response): Promise<void>;
}
declare const _default: UsuarioController;
export default _default;
//# sourceMappingURL=UsuarioController.d.ts.map