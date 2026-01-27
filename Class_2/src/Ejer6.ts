const cuentaBancaria = {
    titular: "Juan Pérez",
    saldo: 500,

    depositar(monto: number): void {
        this.saldo += monto;
        console.log(`Depósito realizado. Nuevo saldo: $${this.saldo}`);
    },

    retirar(monto: number): void {
        if (monto > this.saldo) {
            console.log("Fondos insuficientes");
        } else {
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: $${this.saldo}`);
        }
    }
};

cuentaBancaria.depositar(200);
cuentaBancaria.retirar(100);
cuentaBancaria.retirar(700);
