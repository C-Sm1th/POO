abstract class banco {
    cliente: string
    private saldo: number

    constructor(cliente: string, saldo: number){
        this.cliente = cliente
        this.saldo = saldo
    }

    get nuevosaldo():number{
        return this.saldo
    }

    set nuevosaldo(valor:number){
        if(valor >= 0)
        this.saldo = valor
        else 
            console.log("El valor debe ser mayor o igual que cero")
        
    }

    mostrar(): void{
        console.log("Saldo: $" + this.saldo)
    }

}

//let objeto = new banco("Porfirio", 100)
//objeto.saldo = 200
// objeto.nuevosaldo = 200
// objeto.cliente = "Juan"
// objeto.mostrar()




class movimientos extends banco{

    deposito: number

    constructor(cliente: string, saldo: number, desposito:number){
        super(cliente, saldo)
        this.deposito = desposito
    }

    procesoDesposito(): void{
        let nuevomonto = this.nuevosaldo + this.deposito
        console.log("EL nuevo saldo es: $" + nuevomonto)
        this.comision(nuevomonto)
    }

    comision(nuevomonto:number): void{
        let salida = nuevomonto-1
        console.log("te cobre por la transfer nuevo saldo $" + salida)
    }

}

let dep = 25
let proceso = new movimientos("Porfirio", 100, dep)
proceso.nuevosaldo = 80
proceso.procesoDesposito()