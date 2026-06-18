"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
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
}
class Consulta extends Paciente {
    constructor(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil) {
        super(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil);
    }
    consultaGeneral(sintomas) {
        let costoBase = 50;
        let descuento = parseInt(this.codigoEstudiantil.slice(-2));
        let montoDescuento = costoBase * descuento / 100;
        let costoFinal = costoBase - montoDescuento;
        this.mostrarDatos();
        console.log("Sintomas: " + sintomas);
        console.log("Tipo de Consulta: General");
        console.log("Costo base: $" + costoBase);
        console.log("Total a cancelar con desceunto: $" + costoFinal);
    }
    consultaEspecialidad(sintomas) {
        let costoBase = 90;
        let descuento = parseInt(this.codigoEstudiantil.slice(-2));
        let montoDescuento = costoBase * descuento / 100;
        let descuentoEquipo = costoBase * 0.03;
        let costoFinal = costoBase - (montoDescuento + descuentoEquipo);
        this.mostrarDatos();
        console.log("Sintomas: " + sintomas);
        console.log("Tipo de Consulta: Especialidad");
        console.log("Costo base: $" + costoBase);
        console.log("Total a cancelar con descuento: $" + costoFinal);
    }
    mostrarResumen() {
        console.log("=== Resumen del Paciente ===");
        console.log("Paciente: " + this.nombre);
        console.log("Responsable: " + this.responsable);
        console.log("Codigo: " + this.codigoEstudiantil);
    }
}
class Sistema {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    pedirDatosPaciente() {
        this.rl.question("Ingrese su nombre: ", (nombre) => {
            this.rl.question("Ingrese su fecha de nacimiento: ", (fechaNacimiento) => {
                this.rl.question("Ingrese su edad: ", (edadInicial) => {
                    this.rl.question("Ingrese su telefono: ", (telefono) => {
                        this.rl.question("Ingrese el nombre del responsable: ", (responsable) => {
                            this.rl.question("Ingrese el telefono del responsable: ", (telefonoResponsable) => {
                                this.rl.question("Ingrese su codigo estudiantil: ", (codigoEstudiantil) => {
                                    let edad = parseInt(edadInicial);
                                    let paciente = new Consulta(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil);
                                    this.pedirTipoConsulta(paciente);
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    pedirTipoConsulta(paciente) {
        console.log("¿Que consulta desea?");
        console.log("1. Consulta General");
        console.log("2. Consulta de Especialidad");
        this.rl.question("Seleccione una opcion (1 o 2): ", (opcion) => {
            this.pedirSintomas(paciente, opcion);
        });
    }
    pedirSintomas(paciente, opcion) {
        this.rl.question("Ingrese sus sintomas: ", (sintomas) => {
            this.procesarConsulta(paciente, opcion, sintomas);
        });
    }
    procesarConsulta(paciente, opcion, sintomas) {
        if (opcion === "1") {
            paciente.consultaGeneral(sintomas);
        }
        else if (opcion === "2") {
            paciente.consultaEspecialidad(sintomas);
        }
        else {
            console.log("Opcion no valida");
        }
        paciente.mostrarResumen();
        this.rl.close();
    }
}
const sis = new Sistema();
sis.pedirDatosPaciente();
//# sourceMappingURL=Final2.js.map