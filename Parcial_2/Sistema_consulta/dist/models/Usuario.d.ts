declare class Usuario {
    private id?;
    private nombre;
    private email;
    constructor(nombre: string, email: string, id?: number);
    getNombre(): string;
    getEmail(): string;
    getId(): number | undefined;
}
export default Usuario;
//# sourceMappingURL=Usuario.d.ts.map