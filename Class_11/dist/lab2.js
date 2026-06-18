"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
class Paciente {
    constructor(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.telefono = telefono;
        this.responsable = responsable;
        this.telefonoResponsable = telefonoResponsable;
        this.codigoEstudiantil = codigoEstudiantil;
    }
    get edadPaciente() {
        return this.edad;
    }
    set edadPaciente(valor) {
        this.edad = valor;
    }
    get telefonoPaciente() {
        return this.telefono;
    }
    set telefonoPaciente(valor) {
        this.telefono = valor;
    }
    get telefonoResponsablePaciente() {
        return this.telefonoResponsable;
    }
    set telefonoResponsablePaciente(valor) {
        this.telefonoResponsable = valor;
    }
    mostrarDatos() {
        console.log("=== Datos del Paciente ===");
        console.log("Nombre: " + this.nombre);
        console.log("Fecha de Nacimiento: " + this.fechaNacimiento);
        console.log("Edad: " + this.edadPaciente);
        console.log("Telefono: " + this.telefonoPaciente);
        console.log("Responsable: " + this.responsable);
        console.log("Telefono Responsable: " + this.telefonoResponsablePaciente);
    }
    calcularDescuento() {
        let ultimosDosDigitos = parseInt(this.codigoEstudiantil.slice(-2));
        return ultimosDosDigitos;
    }
}
class Consulta extends Paciente {
    constructor(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil) {
        super(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil);
    }
    consultaGeneral(sintomas) {
        let costoBase = 50;
        let descuento = this.calcularDescuento();
        let montoDescuento = costoBase * descuento / 100;
        let costoFinal = costoBase - montoDescuento;
        this.mostrarDatos();
        console.log("Sintomas: " + sintomas);
        console.log("Tipo de Consulta: General");
        console.log("Costo base: $" + costoBase);
        console.log("Descuento (" + descuento + "%): -$" + montoDescuento.toFixed(2));
        console.log("Total a cancelar: $" + costoFinal.toFixed(2));
    }
    consultaEspecialidad(sintomas) {
        let costoBase = 90;
        let descuento = this.calcularDescuento();
        let montoDescuento = costoBase * descuento / 100;
        let costoConDescuento = costoBase - montoDescuento;
        let descuentoEquipo = costoConDescuento * 0.03;
        let costoFinal = costoConDescuento - descuentoEquipo;
        this.mostrarDatos();
        console.log("Sintomas: " + sintomas);
        console.log("Tipo de Consulta: Especialidad");
        console.log("Costo base: $" + costoBase);
        console.log("Descuento codigo (" + descuento + "%): -$" + montoDescuento.toFixed(2));
        console.log("Descuento uso de equipo (3%): -$" + descuentoEquipo.toFixed(2));
        console.log("Total a cancelar: $" + costoFinal.toFixed(2));
    }
    // Funcion extra: muestra un resumen rapido del paciente
    mostrarResumen() {
        console.log("=== Resumen del Paciente ===");
        console.log("Paciente: " + this.nombre);
        console.log("Responsable: " + this.responsable);
        console.log("Codigo: " + this.codigoEstudiantil);
        console.log("Porcentaje de descuento: " + this.calcularDescuento() + "%");
    }
}
// Entrada de datos con readline
rl.question("Ingrese su nombre: ", (nombre) => {
    rl.question("Ingrese su fecha de nacimiento: ", (fechaNacimiento) => {
        rl.question("Ingrese su edad: ", (edadStr) => {
            rl.question("Ingrese su telefono: ", (telefono) => {
                rl.question("Ingrese el nombre del responsable: ", (responsable) => {
                    rl.question("Ingrese el telefono del responsable: ", (telefonoResponsable) => {
                        rl.question("Ingrese su codigo estudiantil: ", (codigoEstudiantil) => {
                            let edad = parseInt(edadStr);
                            let paciente = new Consulta(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil);
                            console.log("\n¿Que tipo de consulta desea?");
                            console.log("1. Consulta General");
                            console.log("2. Consulta de Especialidad");
                            rl.question("Seleccione una opcion (1 o 2): ", (opcion) => {
                                rl.question("Ingrese sus sintomas: ", (sintomas) => {
                                    console.log("\n");
                                    if (opcion === "1") {
                                        paciente.consultaGeneral(sintomas);
                                    }
                                    else if (opcion === "2") {
                                        paciente.consultaEspecialidad(sintomas);
                                    }
                                    else {
                                        console.log("Opcion no valida");
                                    }
                                    console.log("\n");
                                    paciente.mostrarResumen();
                                    rl.close();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=lab2.js.map