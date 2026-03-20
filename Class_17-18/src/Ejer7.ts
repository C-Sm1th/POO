abstract class transporte {

    dist: string

    constructor(dist: string){
        this.dist = dist
    }

    abstract calcCosto(dist: string): void;

}

class taxi extends transporte {

     calcCosto(): void {
         let costTotal = parseFloat(this.dist) * 1
         console.log("El total en taxi es de: $" + costTotal)
     }

}

class autobus extends transporte {

    calcCosto(): void {
         let costTotal = parseFloat(this.dist) * 0.1
         console.log("El total en autobus es de: $" + costTotal)
     }

}

class uber extends transporte {

    calcCosto(): void {
         let costTotal = parseFloat(this.dist) * 0.5
         console.log("El total en uber es de: $" + costTotal)
     }

}

const t = new taxi("50")
const a = new autobus("30")
const u = new uber("20")

t.calcCosto()
a.calcCosto()
u.calcCosto()