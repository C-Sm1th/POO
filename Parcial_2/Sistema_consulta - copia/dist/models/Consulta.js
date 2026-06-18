"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Consulta {
    id;
    paciente;
    fecha;
    hora;
    doctorId;
    constructor(paciente, fecha, hora, doctorId, id) {
        this.paciente = paciente;
        this.fecha = fecha;
        this.hora = hora;
        this.doctorId = doctorId;
        this.id = id;
    }
    getPaciente() {
        return this.paciente;
    }
    getFecha() {
        return this.fecha;
    }
    getHora() {
        return this.hora;
    }
    getDoctorId() {
        return this.doctorId;
    }
    getId() {
        return this.id;
    }
}
exports.default = Consulta;
//# sourceMappingURL=Consulta.js.map