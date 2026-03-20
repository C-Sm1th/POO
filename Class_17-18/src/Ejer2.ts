abstract class Vehiculo {

    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo
    }

    abstract mover(): void;
}

class carro extends Vehiculo {
     mover(): void {
         console.log("El carro " + this.tipo + " se mueve en cuatro ruedas")
     }
}

class moto extends Vehiculo {

    mover(): void {
        console.log("La moto " + this.tipo + " se mueve en dos ruedas")
    }
}

class bicicleta extends Vehiculo {
    mover(): void {
        console.log("La bicicleta " + this.tipo + " se mueve pedaleando")
    }
}

const carrito = new carro("Honda")
carrito.mover();