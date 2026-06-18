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
    mostrarResumen() {
        console.log("=== Resumen del Paciente ===");
        console.log("Paciente: " + this.nombre);
        console.log("Responsable: " + this.responsable);
        console.log("Codigo: " + this.codigoEstudiantil);
        console.log("Porcentaje de descuento: " + this.calcularDescuento() + "%");
    }
}
class Sistema {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirDatosPaciente();
    }
    pedirDatosPaciente() {
        this.rl.question("Ingrese su nombre: ", (nombre) => {
            this.rl.question("Ingrese su fecha de nacimiento: ", (fechaNacimiento) => {
                this.rl.question("Ingrese su edad: ", (edadI) => {
                    this.rl.question("Ingrese su telefono: ", (telefono) => {
                        this.rl.question("Ingrese el nombre del responsable: ", (responsable) => {
                            this.rl.question("Ingrese el telefono del responsable: ", (telefonoResponsable) => {
                                this.rl.question("Ingrese su codigo estudiantil: ", (codigoEstudiantil) => {
                                    let edad = parseInt(edadI);
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
        console.log("¿Que tipo de consulta desea?");
        console.log("1. Consulta General");
        console.log("2. Consulta de Especialidad");
        this.rl.question("Seleccione una opcion (1 o 2): ", (opcion) => {
            this.pedirSintomas(paciente, opcion);
        });
    }
    pedirSintomas(paciente, opcion) {
        this.rl.question("Ingrese sus sintomas: ", (sintomas) => {
            this.procesarConsulta(paciente, opcion, sintomas);
            this.cerrar();
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
    }
    cerrar() {
        this.rl.close();
    }
}
const sistema = new Sistema();
sistema.iniciar();
//# sourceMappingURL=1.js.map