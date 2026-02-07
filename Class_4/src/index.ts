class POO {
    codigo: string;
    nombre: string;
    edad: number;
    laboratorio1: number;
    laboratorio2: number;
    laboratorio3: number;
    parcial1: number;
    parcial2: number;
    parcial3: number;

    constructor(_codigo:string, _nombre:string, _edad:number, _laboratorio1:number, _laboratorio2:number, _laboratorio3:number, _parcial1:number, _parcia2:number,  _parcial3:number) {
        this.codigo = _codigo;
        this.nombre = _nombre;
        this.edad = _edad;
        this.laboratorio1 = _laboratorio1;
        this.laboratorio2 = _laboratorio2;
        this.laboratorio3 = _laboratorio3;
        this.parcial1 = _parcial1;
        this.parcial2 = _parcia2;
        this.parcial3 = _parcial3;
    }

    public mostrarDatos(): void{
        console.log("El estudiante: " + this.nombre)
        console.log("Codigo: " + this.codigo)
        console.log("Tiene las siguientes notas - Laboratorio: " + this.laboratorio1
            + " Parcial: " + this.parcial1
        )
    }

    public mostrarNotas(): void{
        console.log("Laboratorio: " + this.laboratorio1 + " Parcial: " + this.parcial1)
    }

    public notasCalculo(): void{
        let prom1 = ((this.laboratorio1*0.6) + (this.parcial1*0.4))/3
        let prom2 = ((this.laboratorio2*0.6) + (this.parcial2*0.4))/3
        let prom3 = ((this.laboratorio3*0.6) + (this.parcial3*0.4))/3

        let notaFinal = prom1+prom2+prom3

        console.log(this.nombre + "      l1:" + this.laboratorio1 + " - L2:" + this.laboratorio2 + " - L3:" + this.laboratorio3 + " - P1:" + this.parcial1 + " - P2:" + this.parcial2 + " - P3:" + this.parcial3 + " : " + notaFinal)
    }

}

class Redes{

}

//Objeto instanciado a POO
let estudiante1 = new POO('U20250664', 'christian', 19, 10, 10, 10, 10, 10, 10);
estudiante1.mostrarDatos();
estudiante1.mostrarNotas();
estudiante1.notasCalculo()

//Objeto instanciado a Redes
let estudiante2 = new Redes()

