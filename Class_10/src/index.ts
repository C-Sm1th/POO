class Persona{
    nombre: string;
    edad: number;
    telefono: number;

    constructor(nombre: string, edad: number, telefono: number){
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
    }

    mostrar(): void{
        alert("El nombre es: " + this.nombre)
        alert("Su edad es: " + this.edad)
        alert("Y su telefono es: " + this.telefono)
    }

}

let nombre: string = prompt("Ingrese su nombre") || "";
let edad: number = parseInt(prompt("Ingrese su edad") || "");
let telefono: number = parseInt(prompt("Ingrese su telefono") || "");
let people = new Persona(nombre, edad, telefono);
people.mostrar()