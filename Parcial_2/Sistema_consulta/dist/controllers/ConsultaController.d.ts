import { Request, Response } from "express";
declare class ConsultaController {
    crear(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    listar(req: Request, res: Response): Promise<void>;
    obtenerPorId(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    actualizar(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    eliminar(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: ConsultaController;
export default _default;
//# sourceMappingURL=ConsultaController.d.ts.map