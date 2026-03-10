"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class animal {
    constructor(nombre, categoria, raza) {
        this.nombre = nombre,
            this.categoria = categoria,
            this.raza = raza;
    }
    correr() {
        console.log(`${this.nombre} corre 40km/h ya que es un ${this.categoria} de la raza ${this.raza}`);
    }
}
class encargado extends animal {
    constructor(nombre, categoria, raza, dueno) {
        super(nombre, categoria, raza);
        this.dueno = dueno;
    }
    mostrar() {
        console.log((`${this.dueno} se la pica solo porque su masscota se llama ${this.nombre} y es de raza ${this.raza}`));
    }
    mensaje() {
        console.log(`El animalito que es un ${this.categoria}`);
        console.log(`se llama ${this.nombre} y su dueno es ${this.dueno}`);
    }
}
let exc = new encargado('pipo', 'perro', 'buldog', 'Chris');
exc.mostrar();
exc.mensaje();
//# sourceMappingURL=index.js.map