"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Figura {
}
class rectangulo extends Figura {
    area(base, altura) {
        const are = parseFloat(base) * parseFloat(altura);
        console.log(are);
    }
}
class circulo extends Figura {
    area(pi, r) {
        const are = parseFloat(pi) * (parseFloat(r) * parseFloat(r));
        console.log(are);
    }
}
class cuadrado extends Figura {
    area(L) {
        const are = parseFloat(L) * parseFloat(L);
        console.log(are);
    }
}
const rec = new rectangulo();
const cir = new circulo();
const cuad = new cuadrado();
rec.area("5", "5");
cir.area("3.1416", "5");
cuad.area("5");
//# sourceMappingURL=Ejer3.js.map