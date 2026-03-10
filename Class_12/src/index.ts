class animal{
    nombre: string;
    categoria: string;
    raza: string;

    constructor(nombre:string, categoria:string, raza:string){
        this.nombre = nombre,
        this.categoria = categoria,
        this.raza = raza
    }

    correr(): void{
        console.log(`${this.nombre} corre 40km/h ya que es un ${this.categoria} de la raza ${this.raza}`)
    }
}

class encargado extends animal{
    dueno: string;

    constructor(nombre:string, categoria:string, raza:string, dueno:string){
        super(nombre, categoria, raza)
        this.dueno = dueno 
    }

    mostrar(){
        console.log((`${this.dueno} se la pica solo porque su masscota se llama ${this.nombre} y es de raza ${this.raza}`))
    }

    mensaje(): void{
        console.log(`El animalito que es un ${this.categoria}`)
        console.log(`se llama ${this.nombre} y su dueno es ${this.dueno}`)
    }
}

class vender extends encargado{
    
    constructor(nombre:string, categoria:string, raza:string, dueno: string){
        super(nombre, categoria, raza, dueno)
    }

    mensaje(): void{
        console.log(`${this.nombre} se vende a $50`)
    }
}

let exc = new encargado('pipo', 'perro', 'buldog', 'Chris')
exc.mostrar()
exc.mensaje()