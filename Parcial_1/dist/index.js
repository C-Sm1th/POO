"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
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
        this.rl.question("Ingresa ", (dato) => {
        });
    }
    evaluar() {
    }
    mostrarDatos() {
    }
    cerrar() {
        this.rl.close();
    }
}
const pr = new prestamo();
pr.iniciar();
//# sourceMappingURL=index.js.map