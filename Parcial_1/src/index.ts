import * as readline from "readline";

class prestamo{
   private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar(): void{
        this.obten_datos()
    }

    obten_datos(): void{
        this.rl.question("Ingresa ", (dato) => {
            
        })
    }

    evaluar(){

    }

    mostrarDatos(){

    }

    cerrar(): void {
        this.rl.close();
    }
}

const pr = new prestamo()
pr.iniciar()