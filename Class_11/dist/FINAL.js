"use strict";
// import * as readline from "readline";
Object.defineProperty(exports, "__esModule", { value: true });
// abstract class Paciente {
//   nombre: string;
//   fechaNacimiento: string;
//   private edad: number;
//   private telefono: string;
//   responsable: string;
//   private telefonoResponsable: string;
//   codigoEstudiantil: string;
//   constructor(nombre: string, fechaNacimiento: string, edad: number, telefono: string, responsable: string, telefonoResponsable: string, codigoEstudiantil: string) {
//     this.nombre = nombre;
//     this.fechaNacimiento = fechaNacimiento;
//     this.edad = edad;
//     this.telefono = telefono;
//     this.responsable = responsable;
//     this.telefonoResponsable = telefonoResponsable;
//     this.codigoEstudiantil = codigoEstudiantil;
//   }
//   get edadPaciente(): number {
//     return this.edad;
//   }
//   set edadPaciente(valor: number) {
//     this.edad = valor;
//   }
//   get telefonoPaciente(): string {
//     return this.telefono;
//   }
//   set telefonoPaciente(valor: string) {
//     this.telefono = valor;
//   }
//   get telefonoResponsablePaciente(): string {
//     return this.telefonoResponsable;
//   }
//   set telefonoResponsablePaciente(valor: string) {
//     this.telefonoResponsable = valor;
//   }
//   mostrarDatos(): void {
//     console.log("=== Datos del Paciente ===");
//     console.log("Nombre: " + this.nombre);
//     console.log("Fecha de Nacimiento: " + this.fechaNacimiento);
//     console.log("Edad: " + this.edadPaciente);
//     console.log("Telefono: " + this.telefonoPaciente);
//     console.log("Responsable: " + this.responsable);
//     console.log("Telefono Responsable: " + this.telefonoResponsablePaciente);
//   }
//   calcularDescuento(): number {
//     let ultimosDosDigitos = parseInt(this.codigoEstudiantil.slice(-2));
//     return ultimosDosDigitos;
//   }
//   abstract consultaGeneral(sintomas: string): void;
//   abstract consultaEspecialidad(sintomas: string): void;
// }
// class Consulta extends Paciente {
//     private rl: readline.Interface;
//     constructor() {
//         super();
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//     }
//   constructor(nombre: string, fechaNacimiento: string, edad: number, telefono: string, responsable: string, telefonoResponsable: string, codigoEstudiantil: string) {
//     super(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil)
//   }
//   consultaGeneral(sintomas: string): void {
//     let costoBase = 50;
//     let descuento = this.calcularDescuento();
//     let montoDescuento = costoBase * descuento / 100;
//     let costoFinal = costoBase - montoDescuento;
//     this.mostrarDatos();
//     console.log("Sintomas: " + sintomas);
//     console.log("Tipo de Consulta: General");
//     console.log("Costo base: $" + costoBase);
//     console.log("Descuento (" + descuento + "%): -$" + montoDescuento.toFixed(2));
//     console.log("Total a cancelar: $" + costoFinal.toFixed(2));
//   }
//   consultaEspecialidad(sintomas: string): void {
//     let costoBase = 90;
//     let descuento = this.calcularDescuento();
//     let montoDescuento = costoBase * descuento / 100;
//     let costoConDescuento = costoBase - montoDescuento;
//     let descuentoEquipo = costoConDescuento * 0.03;
//     let costoFinal = costoConDescuento - descuentoEquipo;
//     this.mostrarDatos();
//     console.log("Sintomas: " + sintomas);
//     console.log("Tipo de Consulta: Especialidad");
//     console.log("Costo base: $" + costoBase);
//     console.log("Descuento codigo (" + descuento + "%): -$" + montoDescuento.toFixed(2));
//     console.log("Descuento uso de equipo (3%): -$" + descuentoEquipo.toFixed(2));
//     console.log("Total a cancelar: $" + costoFinal.toFixed(2));
//   }
//   iniciar(): void {
//         this.pedirDatos();
//     }
//     pedirDatos(): void {
//         this.rl.question("Ingrese su nombre: ", (nombre) => {
//             this.nombre = nombre;
//             this.rl.question("Ingrese su fecha de nacimiento: ", (fecha) => {
//                 this.fechaNacimiento = fecha;
//                 this.rl.question("Ingrese su edad: ", (edad) => {
//                     this.edadPaciente = parseInt(edad);
//                     this.rl.question("Ingrese su telefono: ", (tel) => {
//                         this.telefonoPaciente = tel;
//                         this.rl.question("Ingrese el nombre del responsable: ", (resp) => {
//                             this.responsable = resp;
//                             this.rl.question("Ingrese el telefono del responsable: ", (telResp) => {
//                                 this.telefonoResponsablePaciente = telResp;
//                                 this.rl.question("Ingrese su codigo estudiantil: ", (codigo) => {
//                                     this.codigoEstudiantil = codigo;
//                                     this.pedirConsulta();
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     }
//     pedirConsulta(): void {
//         console.log("\n1. Consulta General\n2. Consulta de Especialidad");
//         this.rl.question("Seleccione una opcion (1 o 2): ", (opcion) => {
//             this.rl.question("Ingrese sus sintomas: ", (sintomas) => {
//                 console.log("");
//                 if (opcion === "1") {
//                     this.consultaGeneral(sintomas);
//                 } else if (opcion === "2") {
//                     this.consultaEspecialidad(sintomas);
//                 } else {
//                     console.log("Opcion no valida");
//                 }
//                 console.log("");
//                 this.mostrarResumen();
//                 this.rl.close();
//             });
//         });
//     }
// }
// const consulta = new Consulta();
// consulta.iniciar();
//# sourceMappingURL=FINAL.js.map