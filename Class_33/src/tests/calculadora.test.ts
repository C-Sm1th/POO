import { Calculadora } from "../models/calculadora";

describe("Prueba de suma en calculadora", ()=>{ // describe las pruebas unitarias de la clase
    test("La suma de 2 números es correcta", ()=>{
        const calcular = new Calculadora();
        const resultado = calcular.sumar(2,5);
        expect(resultado).toBe(7);
    });

    test("La resta de 2 números es correcta", ()=>{
        const calcular = new Calculadora();
        const resultado = calcular.restar(8,5);
        expect(resultado).toBe(3);
    });
});