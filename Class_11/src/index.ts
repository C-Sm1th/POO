// import * as readline from "readline";

// class programa{
//     private rl: readline.Interface;

//     constructor() {
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         })
//     }

//     iniciar(): void{
//         this.perdirNumero()
//     }

//     perdirNumero(): void {
//         this.rl.question("INgresa un numero: ", (respuesta: string) => {
//             const numero = Number(respuesta)

//             this.evaluarNumero(numero);
//             this.cerrar()
//         });
//     }

//     evaluarNumero(numero: number): void {
//         if (numero > 10) {
//             console.log("es mayor que 10")
//         }else if (numero === 10) {
//             console.log("es igual que 10")
//         }else {
//             console.log("es menor que 10")
//         }
//     }

//     cerrar(): void{
//         this.rl.close()
//     }
// }

// const app= new programa()
// app.iniciar()


///Ejercicios Clase

//Ejercicio 1

import * as readline from "readline";

class programa{
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar(): void{
        this.perdirNota()
    }

    perdirNota(): void {
        this.rl.question("Ingrese nota del estudiante: ", (nota: string) => {
            const numero = Number(nota)

            this.evaluarNota(numero);
            this.cerrar()
        });
    }

    evaluarNota(nota: number): void {
        if (nota >= 9 && nota >= 10) {
            console.log("Excelente")
        }else if (nota >= 7 && nota >= 8.9) {
            console.log("Excelente")
        }else if (nota >= 6 && nota >= 6.9) {
            console.log("Excelente")
        }else {
            console.log("Reprobado")
        }
    }

    cerrar(): void{
        this.rl.close()
    }
}

const app= new programa()
app.iniciar()


//Ejercicio 2

class sistema{
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar(): void{
        this.perdirUsuarioContrasena()
    }

    perdirUsuarioContrasena(): void {
        this.rl.question("Ingrese su usuario: ", (usuario: string) => {
            this.rl.question("Ingrese su contrasena: ", (contra: string) => {
                
                this.evaluarUsuContra(usuario, contra);
                this.cerrar()

            })
        });
    }

    evaluarUsuContra(usuario: string, contra: string): void {
        if (usuario === "gatito" && contra === "123" ) {
            console.log("Login correcto. " + "Su rol es: Administrador")
        }else if (usuario === "perrito" && contra === "1234" ) {
            console.log("Login correcto. " + "Su rol es: Cliente")
        }else if (usuario === "cerdito" && contra === "12345" ) {
            console.log("Login correcto. " + "Su rol es: Invitado")
        }else {
            console.log("Usuario o contrasena incorrecta")
        }
    }

    cerrar(): void{
        this.rl.close()
    }
}

const sistem = new sistema()
sistem.iniciar()
