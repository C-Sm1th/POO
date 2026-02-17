"use strict";
// class persona{
//     nombre: string;
//     apellido: string;
//     telefono: number;
//     correo: string;
//     private identificacion: string;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(nombre:string, apellido: string, telefono: number, correo: string, identificacion: string){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.telefono = telefono
//         this.correo = correo
//         this.identificacion = identificacion
//     }
// }
// let p = new persona("Juan", "Gomez", 72117678, "Juan1234@gmail.com", "U20257656")
// console.log(p.nombre)
// console.log(p.apellido)
// console.log(p.telefono)
// console.log(p.correo)
///Ejercicio 2
// class compra{
//     nombre: string;
//     cantidad: number;
//     precio: number;
//     constructor(nombre:string, cantidad:number, precio: number){
//         this.nombre = nombre
//         this.cantidad = cantidad
//         this.precio = precio
//     }
//     calculo(descuento:number): void{
//         let calPagoInicial = this.precio * this.cantidad
//         let calDescuent = calPagoInicial * (descuento/100)
//         let calIva = calPagoInicial * 0.13
//         let totalPagar = calPagoInicial + calIva - calDescuent
//         console.log("Cantidad de productos: " + this.cantidad)
//         console.log("Precio: $" + this.precio)
//         console.log("Descuento: $" + calDescuent)
//         console.log("IVA: $" + calIva)
//         console.log("Total a pagar: " + totalPagar)
//     }
// }
// let c = new compra("Soda magica", 10, 1)
// c.calculo(50)
///Ejercicio 3
class persona {
    constructor(nombre, añoNacimiento, mesNacimiento, diaNacimiento) {
        this.nombre = nombre;
        this.añoNacimiento = añoNacimiento;
        this.diaNacimiento = diaNacimiento;
        this.mesNAcimiento = mesNacimiento;
    }
    calEdad() {
        let edadReal = 2026 - this.añoNacimiento;
        if (edadReal >= 0 && edadReal <= 2) {
            console.log("Su edad es: " + edadReal);
            console.log("Y usted es un: bebe");
        }
        else if (edadReal > 2 && edadReal <= 10) {
            console.log("Su edad es: " + edadReal);
            console.log("Usted es un: nino");
        }
        else if (edadReal > 10 && edadReal <= 14) {
            console.log("Su edad es: " + edadReal);
            console.log("Usted es un: pre-Adolescente");
        }
        else if (edadReal > 14 && edadReal <= 17) {
            console.log("Su edad es: " + edadReal);
            console.log("Usted es un: adolescente");
        }
        else if (edadReal > 17 && edadReal <= 30) {
            console.log("Su edad es: " + edadReal);
            console.log("Usted es un: joven");
        }
        else if (edadReal > 30 && edadReal <= 50) {
            console.log("Su edad es: " + edadReal);
            console.log("Usted es un: adulto");
        }
        else if (edadReal > 50) {
            console.log("Su edad es: " + edadReal);
            console.log("Usted es un: adulto mayor");
        }
    }
}
let p = new persona("Juan", 1994, 10, 16);
p.calEdad();
//# sourceMappingURL=index.js.map