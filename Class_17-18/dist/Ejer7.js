"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class transporte {
    constructor(dist) {
        this.dist = dist;
    }
}
class taxi extends transporte {
    calcCosto() {
        let costTotal = parseFloat(this.dist) * 1;
        console.log("El total es de: $" + costTotal);
    }
}
class autobus extends transporte {
    calcCosto() {
        let costTotal = parseFloat(this.dist) * 0.1;
        console.log("El total es de: $" + costTotal);
    }
}
class uber extends transporte {
    calcCosto() {
        let costTotal = parseFloat(this.dist) * 0.5;
        console.log("El total es de: $" + costTotal);
    }
}
const t = new taxi("50");
const a = new autobus("30");
const u = new uber("20");
t.calcCosto();
a.calcCosto();
u.calcCosto();
//# sourceMappingURL=Ejer7.js.map