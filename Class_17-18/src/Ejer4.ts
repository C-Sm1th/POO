abstract class Empleado {

    abstract calcularSalario(a: string, b: string): void;

}

class empleado_hora extends Empleado {

     calcularSalario(salPorHora: string, horas: string): void {
         const salFinal = parseFloat(salPorHora) * parseFloat(horas);
         console.log(salFinal)
     }

}

class empleado_fijo extends Empleado {

    calcularSalario(salBase: string): void {
         const salFinal = parseFloat(salBase)
         console.log(salFinal)
     }

}

class empleado_comi extends Empleado {

    calcularSalario(ventaTotal: string, dinPorcent: string): void {
         const are = parseFloat(ventaTotal) * parseFloat(dinPorcent)
         console.log(are)
     }

}

const empHor = new empleado_hora()
const empFij = new empleado_fijo()
const empCom = new empleado_comi()

empHor.calcularSalario("20", "10")
empFij.calcularSalario("370")
empCom.calcularSalario("500", "0.10")