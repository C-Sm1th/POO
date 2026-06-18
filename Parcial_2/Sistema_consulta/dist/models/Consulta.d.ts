declare class Consulta {
    private id?;
    private paciente;
    private fecha;
    private hora;
    private doctorId;
    constructor(paciente: string, fecha: string, hora: string, doctorId: number, id?: number);
    getPaciente(): string;
    getFecha(): string;
    getHora(): string;
    getDoctorId(): number;
    getId(): number | undefined;
}
export default Consulta;
//# sourceMappingURL=Consulta.d.ts.map