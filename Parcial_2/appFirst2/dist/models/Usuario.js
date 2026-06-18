"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//clase del modelo
class Usuario {
    //Atributos
    id;
    nombre;
    email;
    //Constructor
    constructor(nombre, email, id) {
        this.nombre = nombre;
        this.email = email;
        this.id = id;
    }
    //Modificadores de acceso para acceder a las variables
    getNombre() {
        return this.nombre;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
}
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map