abstract class Pago {
    
    total: string

    constructor(total: string){
        this.total = total
    }
    abstract procesarPago(total: string): void;

}

class tarjeta extends Pago {

     procesarPago(saldo: string): void {
         if(saldo >= this.total){
            let exec= parseFloat(saldo) - parseFloat(this.total)
            let nuevoSaldo = exec

            console.log("Pago exitoso")
            console.log("saldo restante: $" + nuevoSaldo)
         }else {
            console.log("Declinada")
         }
     }

}

class efectivo extends Pago {

    procesarPago(efectivo: string): void {
         const exec = parseFloat(efectivo) - parseFloat(this.total)
         console.log("--------------------------------------------------")
         console.log("El cambio es de: $" + exec)
         console.log("--------------------------------------------------")
     }

}

class transferencia extends Pago {

    procesarPago(saldo: string): void {
         let exec = parseFloat(saldo) - parseFloat(this.total)
         console.log("cuenta a: $ " + exec)
     }

}

const tar = new tarjeta("200")
const efec = new efectivo("200")
const trans = new transferencia("200")

tar.procesarPago("300")
efec.procesarPago("500")
trans.procesarPago("500")