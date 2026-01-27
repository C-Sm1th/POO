let estudiante = {
    nombre: "maria",
    carrera: "Ingenieria",
    saludar(): void{
        console.log("Hola, soy " + this.nombre);
    }
};

estudiante.saludar();