"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pago {
    constructor(total) {
        this.total = total;
    }
}
class tarjeta extends Pago {
    procesarPago(saldo) {
        if (saldo >= this.total) {
            let exec = parseFloat(saldo) - parseFloat(this.total);
            let nuevoSaldo = exec;
            console.log("Pago exitoso");
            console.log("saldo restante: $" + nuevoSaldo);
        }
        else {
            console.log("Declinada");
        }
    }
}
class efectivo extends Pago {
    procesarPago(efectivo) {
        const exec = parseFloat(efectivo) - parseFloat(this.total);
        console.log("--------------------------------------------------");
        console.log("El cambio es de: $" + exec);
        console.log("--------------------------------------------------");
    }
}
class transferencia extends Pago {
    procesarPago(saldo) {
        let exec = parseFloat(saldo) - parseFloat(this.total);
        console.log("cuenta a: $ " + exec);
    }
}
const tar = new tarjeta("200");
const efec = new efectivo("200");
const trans = new transferencia("200");
tar.procesarPago("300");
efec.procesarPago("500");
trans.procesarPago("500");
//# sourceMappingURL=Ejer5.js.map