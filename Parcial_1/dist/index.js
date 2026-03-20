"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
// class prestamo{
//    private rl: readline.Interface;
//     constructor() {
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         })
//     }
//     iniciar(): void{
//         this.obten_datos()
//     }
//     obten_datos(): void{
//         this.rl.question("Ingresa ", (dato) => {
//         })
//     }
//     evaluar(){
//     }
//     mostrarDatos(){
//     }
//     cerrar(): void {
//         this.rl.close();
//     }
// }
// const pr = new prestamo()
// pr.iniciar()
class prestamo {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.obten_datos();
    }
    obten_datos() {
        this.rl.question("Ingresa tu nombre: ", (nombre) => {
            this.rl.question("Ingresa tu fecha de nacimiento (Ejm: 2006-10-16): ", (fecha) => {
                this.rl.question("Ingresa tu estado civil: ", (estado_civ) => {
                    this.rl.question("Ingresa tu sueldo: ", (sueld) => {
                        const edad = new Date().getFullYear() - new Date(fecha).getFullYear();
                        const sueldo = Number(sueld);
                        this.evaluarPrestamo(nombre, edad, estado_civ, sueldo);
                        this.cerrar();
                    });
                });
            });
        });
    }
    evaluarPrestamo(nombre, edad, estado_civ, sueldo) {
        let prestamo = 0;
        if (estado_civ === "casado" && edad >= 22 && sueldo >= 450 && sueldo <= 600) {
            prestamo = 2000;
        }
        else if (estado_civ === "casado" && edad >= 32 && sueldo >= 601 && sueldo <= 1000) {
            prestamo = 3000;
        }
        else if (estado_civ === "soltero" && edad >= 22 && sueldo >= 400 && sueldo <= 600) {
            prestamo = 2500;
        }
        else if (estado_civ === "soltero" && edad >= 30 && sueldo >= 601 && sueldo <= 1000) {
            prestamo = 3500;
        }
        else if (estado_civ === "viudo" && edad >= 31 && sueldo >= 600 && sueldo <= 1500) {
            prestamo = 4000;
        }
        this.mostrarDatos(nombre, edad, estado_civ, sueldo, prestamo);
    }
    mostrarDatos(nombre, edad, estado_civ, sueldo, prestamo) {
        console.log(`${nombre}, ${estado_civ} de ${edad} anos de edad con un sueldo de $${sueldo}`);
        if (prestamo > 0) {
            console.log(`Se le permite otorgar el préstamo de $${prestamo.toFixed(2)}`);
        }
        else {
            console.log("No cumple con los requisitos para un préstamo");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const pr = new prestamo();
pr.iniciar();
//# sourceMappingURL=index.js.map