abstract class Figura {

    abstract area(a: string, b: string): void;

}

class rectangulo extends Figura {

     area(base: string, altura: string): void {
         const are = parseFloat(base) * parseFloat(altura);
         console.log(are)
     }

}

class circulo extends Figura {

    area(pi: string, r: string): void {
         const are = parseFloat(pi) * (parseFloat(r) * parseFloat(r))
         console.log(are)
     }

}

class cuadrado extends Figura {

    area(L: string): void {
         const are = parseFloat(L) * parseFloat(L)
         console.log(are)
     }

}

const rec = new rectangulo()
const cir = new circulo()
const cuad = new cuadrado()
rec.area("5", "5")
cir.area("3.1416", "5")
cuad.area("5")