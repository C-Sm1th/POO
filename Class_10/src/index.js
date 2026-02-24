var Persona = /** @class */ (function () {
    function Persona(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    Persona.prototype.mostrar = function () {
        alert("El nombre es: " + this.nombre);
        alert("El nombre es: " + this.edad);
        alert("El nombre es: " + this.telefono);
    };
    return Persona;
}());
var nombre = prompt("Ingrese su nombre") || "";
var edad = parseInt(prompt("Ingrese su edad") || "");
var telefono = parseInt(prompt("Ingrese su telefono") || "");
var people = new Persona(nombre, edad, telefono);
people.mostrar();
