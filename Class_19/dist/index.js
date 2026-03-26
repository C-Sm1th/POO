"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cuentaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        if (valor < 0) {
            console.log("No se permiten saldo negativo");
            return;
        }
        this._saldo = valor;
    }
    depositar(monto) {
        if (monto > 0) {
            this._saldo += monto;
        }
    }
}
const cuenta = new cuentaBancaria(1000);
cuenta.saldo = -5000;
cuenta.depositar(500);
console.log(cuenta.saldo); //1500
//# sourceMappingURL=index.js.map