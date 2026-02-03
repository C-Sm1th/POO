// class GYM{
//     peso: number;
//     estatura: number;

//     constructor(peso:number, estatura:number){
//         this.peso=peso;
//         this.estatura=estatura
//     }

//     public IMC(): void{
//         let imc = (this.peso / (this.estatura)**2)

//         let estado;

//         if(imc < 18.5){
//             estado = `Usted tiene bajo peso`;
//         }else if(imc >= 18.5 && imc <= 24.5){
//             estado = `Usted tiene un peso normal`;
//         }else if(imc >= 25 && imc >= 29.9){
//             estado = `Usted posee sobrepeso`;
//         }else if(imc >= 30){
//             estado = `Usted tiene obesidad`;
//         }

//         console.log("Su imc es de: " + imc + " y su estado es: " + estado)
//     }
// }

// let cliente = new GYM(105, 1.76)

// cliente.IMC()



/////Ejercicio 2

// class Conversor {

//     escala: string;
//     temp: number;

//     constructor(temp: number, escala: string) {
//         this.temp = temp;
//         this.escala = escala;
//     }

//     public FC(): void {
//         let conver = (this.temp - 32) / 1.8;
//         console.log(this.temp + " °F equivale a " + conver + " °C");
//     }

//     public CF(): void {
//         let conver = (this.temp * 1.8) + 32;
//         console.log(this.temp + " °C equivale a " + conver + " °F");
//     }

//     public KF(): void {
//         let conver = (this.temp - 273.15) * 1.8 + 32;
//         console.log(this.temp + " K equivale a " + conver + " °F");
//     }

//     public KC(): void {
//         let conver = this.temp - 273.15;
//         console.log(this.temp + " K equivale a " + conver + " °C");
//     }
// }

// const conv1 = new Conversor(100, "F");
// conv1.FC();





////Ejercico 4

class Instituo {

    falta: number;

    constructor(falta: number) {
        this.falta = falta;
    }

    public seleccion(): void {

        let monto: number = 0;
        let descripcion: string = "";

        if (this.falta == 1) {
            descripcion = "Llegada tardía";
            monto = 1;

        } else if (this.falta == 2) {
            descripcion = "Caminar por los pasillos en horas de clase";
            monto = 3;

        } else if (this.falta == 3) {
            descripcion = "No usar vestimenta apropiada";
            monto = 5;

        } else if (this.falta == 4) {
            descripcion = "No hacer uso adecuado de las instalaciones";
            monto = 10;

        } else {
            console.log("Falta no válida");
            return;
        }

        console.log("Infracción:", descripcion);
        console.log("Total a pagar: $", monto);
    }
}

let alumno = new Instituo(3);
alumno.seleccion();