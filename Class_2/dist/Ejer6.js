"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cuentaBancaria = {
    titular: "Juan Pérez",
    saldo: 500,
    depositar(monto) {
        this.saldo += monto;
        console.log(`Depósito realizado. Nuevo saldo: $${this.saldo}`);
    },
    retirar(monto) {
        if (monto > this.saldo) {
            console.log("Fondos insuficientes");
        }
        else {
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: $${this.saldo}`);
        }
    }
};
// Pruebas
cuentaBancaria.depositar(200);
cuentaBancaria.retirar(100);
cuentaBancaria.retirar(700);
//# sourceMappingURL=Ejer6.js.map