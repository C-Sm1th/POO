"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
}
class empleado_hora extends Empleado {
    calcularSalario(salPorHora, horas) {
        const salFinal = parseFloat(salPorHora) * parseFloat(horas);
        console.log(salFinal);
    }
}
class empleado_fijo extends Empleado {
    calcularSalario(salBase) {
        const salFinal = parseFloat(salBase);
        console.log(salFinal);
    }
}
class empleado_comi extends Empleado {
    calcularSalario(ventaTotal, dinPorcent) {
        const are = parseFloat(ventaTotal) * parseFloat(dinPorcent);
        console.log(are);
    }
}
const empHor = new empleado_hora();
const empFij = new empleado_fijo();
const empCom = new empleado_comi();
empHor.calcularSalario("20", "10");
empFij.calcularSalario("370");
empCom.calcularSalario("500", "0.10");
//# sourceMappingURL=Ejer4.js.map