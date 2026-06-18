class Consulta {
    private id?: number;
    private paciente: string;
    private fecha: string;
    private hora: string;
    private doctorId: number;

    constructor(paciente: string, fecha: string, hora: string, doctorId: number, id?: number) {
        this.paciente = paciente;
        this.fecha = fecha;
        this.hora = hora;
        this.doctorId = doctorId;
        this.id = id;
    }

    public getPaciente(): string {
        return this.paciente;
    }

    public getFecha(): string {
        return this.fecha;
    }

    public getHora(): string {
        return this.hora;
    }

    public getDoctorId(): number {
        return this.doctorId;
    }

    public getId(): number | undefined {
        return this.id;
    }
}

export default Consulta;