let producto = {
    nombre: "Mosue Razer",
    precio: 35,
    conectividad: "Alambrico",
    color: "negro",

    mostrar(): void{
        console.log("Nuevo " + this.nombre + " color " + this.color + " con un precio de $" + this.precio + ", conexion tipo " + this.conectividad)
    }
}

producto.mostrar()