"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class Aplicacion {
    constructor() {
        this.nombre = "";
        this.fechaNacimiento = "";
        this.edad = 0;
        this.telefono = 0;
        this.responsable = "";
        this.numResponsable = 0;
        this.sintomas = "";
        this.codigo = "";
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
}
class Consulta extends Aplicacion {
    pedirInformacion() {
        this.rl.question("Ingrese su nombre: ", (nombre) => {
            this.nombre = nombre;
            this.rl.question("Ingrese su fecha de nacimiento: ", (fecha) => {
                this.fechaNacimiento = fecha;
                this.rl.question("Ingrese su edad: ", (edad) => {
                    this.edad = Number(edad);
                    this.rl.question("Ingrese su numero de telefono: ", (numero) => {
                        this.telefono = Number(numero);
                        this.rl.question("Ingrese el nombre de su responsable: ", (responsable) => {
                            this.responsable = responsable;
                            this.rl.question("Ingrese el numero de telefono de su responsable: ", (numeroR) => {
                                this.numResponsable = Number(numeroR);
                                this.rl.question("Ingrese su codigo estudiantil para el descuento de su consulta: ", (cod) => {
                                    this.codigo = cod;
                                    this.elegirConsulta();
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    elegirConsulta() {
        console.log("1: Consulta medica General ($50)");
        console.log("2: Consulta medica de Especialidad ($90)");
        this.rl.question("Que consulta quiere hacerse? ", (option) => {
            const opcionElegida = Number(option);
            switch (opcionElegida) {
                case 1:
                    console.log("Consulta Elegida: Consulta medica general");
                    this.consultaGeneral();
                    break;
                case 2:
                    console.log("Consulta elegida: Consulta medica de Especialidad");
                    this.consultaEspecializada();
                    break;
                default:
                    console.log("Consulta medica no encontrada");
                    this.elegirConsulta();
                    break;
            }
        });
    }
    consultaGeneral() {
        this.rl.question("Escriba sus sintomas(separados por ','): ", (sintomas) => {
            this.sintomas = sintomas;
            const precioBase = 50;
            const numero = Number(this.codigo.slice(-2));
            let descuento = precioBase * numero / 100;
            let total = precioBase - descuento;
            console.log("RECIBO MEDICO: CONSULTA GENERAL");
            this.mostrarDatos();
            console.log("Precio Original: ", precioBase);
            console.log(`descuento aplicado por codigo: $${descuento}`);
            console.log(`Costo total: $${total.toFixed(2)}`);
            this.Resultados();
        });
    }
    consultaEspecializada() {
        this.rl.question("Escriba sus sintomas(separados por ','): ", (sintomas) => {
            this.sintomas = sintomas;
            const precioBase = 90;
            const numero = Number(this.codigo.slice(-2));
            let descuento = precioBase * numero / 100;
            const descuentoEquipo = precioBase * 0.03;
            let total = precioBase - descuento - descuentoEquipo;
            console.log("RECIBO MEDICO: CONSULTA ESPECIALIZADA");
            this.mostrarDatos();
            console.log("Precio Original: ", precioBase);
            console.log("Descuento de equipo: ", descuentoEquipo.toFixed());
            console.log(`descuento aplicado por codigo: $${descuento}`);
            console.log(`Costo total: $${total.toFixed(2)}`);
            this.Resultados();
        });
    }
    mostrarDatos() {
        console.log(`Nombre del Paciente: ${this.nombre}`);
        console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Numero de telefono: ${this.telefono}`);
        console.log(`Persona Responsable: ${this.responsable}`);
        console.log(`Numero del responsable: ${this.numResponsable}`);
        console.log(`Codigo de descuento: ${this.codigo}`);
        console.log(`Sintomas reportados: ${this.sintomas}`);
    }
    Resultados() {
        const listaSintomas = this.sintomas.split(",");
        const cantidad = listaSintomas.length;
        console.log("EVALUACION FINAL DE LA CONSULTA");
        if (cantidad > 5) {
            console.log("Estado: GRAVE");
            console.log("Se le realizaran x examenes de inmediato.Se le apartara una cita de urgencias");
        }
        else if (cantidad >= 2 && cantidad <= 5) {
            console.log("Estado: En observacion");
            console.log("Se le recomendara x medicamento y se le apartara una cita de seguimiento el dia 16 de abril");
        }
        else {
            console.log("Estado: leve");
            console.log("Se le recomendara x medicamentos y se sugiere reposo");
        }
        this.rl.close();
    }
}
const paciente1 = new Consulta();
paciente1.pedirInformacion();
//# sourceMappingURL=nico.js.map