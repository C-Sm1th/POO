let persona = {
    nombre: "Juan",
    edad: 19,
    altura: 1.72,
    saludar(): void{
        console.log(`Hola. soy ${this.nombre} tengo ${this.edad} anos y mido ${this.altura} metros de altura`);
    }
}

persona.saludar()