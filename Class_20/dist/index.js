"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class banco {
    constructor(cliente, saldo) {
        this.cliente = cliente;
        this.saldo = saldo;
    }
    get nuevosaldo() {
        return this.saldo;
    }
    set nuevosaldo(valor) {
        if (valor >= 0)
            this.saldo = valor;
        else
            console.log("El valor debe ser mayor o igual que cero");
    }
    mostrar() {
        console.log("Saldo: $" + this.saldo);
    }
}
//let objeto = new banco("Porfirio", 100)
//objeto.saldo = 200
// objeto.nuevosaldo = 200
// objeto.cliente = "Juan"
// objeto.mostrar()
class movimientos extends banco {
    constructor(cliente, saldo, desposito) {
        super(cliente, saldo);
        this.deposito = desposito;
    }
    procesoDesposito() {
        let nuevomonto = this.nuevosaldo + this.deposito;
        console.log("EL nuevo saldo es: $" + nuevomonto);
        this.comision(nuevomonto);
    }
    comision(nuevomonto) {
        let salida = nuevomonto - 1;
        console.log("te cobre por la transfer nuevo saldo $" + salida);
    }
}
let dep = 25;
let proceso = new movimientos("Porfirio", 100, dep);
proceso.nuevosaldo = 80;
proceso.procesoDesposito();
//# sourceMappingURL=index.js.map