"use strict";
// class usuario{
//     public nombre: string;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor (nombre:string){
//         this.nombre = nombre;
//     }
// }
// const u = new usuario("Chris")
// console.log(u.nombre)
////Ejercicio 2
// class Usuario{
//     private password: string;
//     constructor(pass: string) {
//         this.password = pass
//     }
//     validar(pass:string): boolean {
//         return this.password === pass;
//     }
// }
// const u = new Usuario("1234");
// console.log(u.validar("123"));
////Ejercicio 3
// class Persona{
//     protected edad: number;
//     constructor(edad:number) {
//         this.edad = edad;
//     }
// }
// class Estudiante extends Persona {
//     mostrarEdad() {
//         return this.edad
//     }
// }
// const e = new Estudiante(28);
// console.log(e.mostrarEdad());
//////////EJERCICIOS//////////////
// class Usuario {
//   public username: string;
//   private password: string;
//   constructor(username: string, password: string) {
//     this.username = username;
//     this.password = password;
//   }
//   login(pass: string): string {
//     if (pass === this.password) {
//       return "Acceso concedido";
//     } else {
//       return "Contraseña incorrecta";
//     }
//   }
// }
// const u = new Usuario("Chris","holaJuan123")
// console.log(u.login("holaJuan123"))
//Ejercicio 2
// class Producto {
//   constructor(
//     public nombre: string,
//     private precio: number
//   ) {}
//   evaluarPrecio(): string {
//     if (this.precio < 10) {
//       return "Producto barato";
//     } else if (this.precio <= 50) {
//       return "Precio normal";
//     } else {
//       return "Producto caro";
//     }
//   }
// }
// const p = new Producto("Mouse Razer", 25);
// console.log(p.evaluarPrecio())
//Ejercicio 3
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
}
class Gerente extends Empleado {
    bono() {
        if (this.salario > 1000) {
            return this.salario * 0.2;
        }
        else {
            return this.salario * 0.1;
        }
    }
}
const e = new Gerente("Juan", 1500);
console.log(e.bono());
//# sourceMappingURL=index.js.map