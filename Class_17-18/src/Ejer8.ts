abstract class producto {

    producto1: string
    producto2: string
    producto3: string

    constructor(producto1: string, producto2: string, producto3: string){
        this.producto1 = producto1
        this.producto2 = producto2
        this.producto3 = producto3
    }

    abstract calcularPrecioFinal(producto1: string, producto2: string, producto3: string): void;

    abstract mostrarInformacion(a: number, b: number): void;
}

class electronicos extends producto {

    calcularPrecioFinal(): void {
        let precCalc = parseFloat(this.producto1) + parseFloat(this.producto2)
        let descuento = precCalc * 0.10
        let precFinal = precCalc - descuento

        this.mostrarInformacion(descuento, precFinal)
    }

    mostrarInformacion(descuento: number, precFinal: number): void {
        console.log("El descuento aplicado es de: $" + descuento)
        console.log("El total a pagar es de: $" + precFinal)
    }
}

class ropa extends producto {

    calcularPrecioFinal(): void {
        let precCalc = parseFloat(this.producto1) + parseFloat(this.producto2) + parseFloat(this.producto3)
        let impuesto = precCalc * 0.10
        let precFinal = precCalc + impuesto

        this.mostrarInformacion(impuesto, precFinal)
    }

    mostrarInformacion(impuesto: number, precFinal: number): void {
        console.log("El impuesto aplicado es de: $" + impuesto)
        console.log("El total a pagar es de: $" + precFinal)
    }
}

class alimentos extends producto {

    calcularPrecioFinal(): void {
        let precCalc = parseFloat(this.producto1) + parseFloat(this.producto2) + parseFloat(this.producto3)
        let descuento = precCalc * 0.5
        let precFinal = precCalc - descuento

        this.mostrarInformacion(descuento, precFinal)
    }

    mostrarInformacion(descuento: number, precFinal: number): void {
        console.log("El descuento aplicado es de: $" + descuento)
        console.log("El total a pagar es de: $" + precFinal)
    }

}

const elect = new electronicos("50", "200", "100")
const rop = new ropa("30", "20", "10")
const alim = new alimentos("5", "10", "10")
elect.calcularPrecioFinal()
rop.calcularPrecioFinal()
alim.calcularPrecioFinal()