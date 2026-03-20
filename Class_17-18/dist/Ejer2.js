"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class carro extends Vehiculo {
    mover() {
        console.log("Guau");
    }
}
class moto extends Vehiculo {
    mover() {
        console.log("Miau");
    }
}
const carrito = new carro("Honda");
carrito.mover();
//# sourceMappingURL=Ejer2.js.map