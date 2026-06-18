import * as readline from "readline";

abstract class Paciente {
    nombre: string;
    fechaNacimiento: string;
    private edad: number;
    private telefono: string;
    responsable: string;
    private telefonoResponsable: string;
    codigoEstudiantil: string;

    constructor(nombre: string, fechaNacimiento: string, edad: number, telefono: string, responsable: string, telefonoResponsable: string, codigoEstudiantil: string) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.telefono = telefono;
        this.responsable = responsable;
        this.telefonoResponsable = telefonoResponsable;
        this.codigoEstudiantil = codigoEstudiantil;
    }

    get edadPaciente(): number {
        return this.edad;
    }

    set edadPaciente(valor: number) {
        this.edad = valor;
    }

    get telefonoPaciente(): string {
        return this.telefono;
    }

    set telefonoPaciente(valor: string) {
        this.telefono = valor;
    }

    get telefonoResponsablePaciente(): string {
        return this.telefonoResponsable;
    }

    set telefonoResponsablePaciente(valor: string) {
        this.telefonoResponsable = valor;
    }

    mostrarDatos(): void {
        console.log("=== Datos del Paciente ===");
        console.log("Nombre: " + this.nombre);
        console.log("Fecha de Nacimiento: " + this.fechaNacimiento);
        console.log("Edad: " + this.edadPaciente);
        console.log("Telefono: " + this.telefonoPaciente);
        console.log("Responsable: " + this.responsable);
        console.log("Telefono Responsable: " + this.telefonoResponsablePaciente);
    }

    abstract mostrarResumen(): void;
    abstract consultaGeneral(sintomas: string): void;
    abstract consultaEspecialidad(sintomas: string): void;
}

class Consulta extends Paciente {
    constructor(nombre: string, fechaNacimiento: string, edad: number, telefono: string, responsable: string, telefonoResponsable: string, codigoEstudiantil: string) {
        super(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil);
    }

    consultaGeneral(sintomas: string): void {
        let costoBase = 50;
        let descuento = parseInt(this.codigoEstudiantil.slice(-2));
        let montoDescuento = costoBase * descuento / 100;
        let costoFinal = costoBase - montoDescuento;

        this.mostrarDatos();
        console.log("Sintomas: " + sintomas);
        console.log("Tipo de Consulta: General");
        console.log("Costo base: $" + costoBase);
        console.log("Total a cancelar con desceunto: $" + costoFinal);
    }

    consultaEspecialidad(sintomas: string): void {
        let costoBase = 90;
        let descuento = parseInt(this.codigoEstudiantil.slice(-2));
        let montoDescuento = costoBase * descuento / 100;
        let descuentoEquipo = costoBase * 0.03;
        let costoFinal = costoBase - (montoDescuento + descuentoEquipo);

        this.mostrarDatos();
        console.log("Sintomas: " + sintomas);
        console.log("Tipo de Consulta: Especialidad");
        console.log("Costo base: $" + costoBase);
        console.log("Total a cancelar con descuento: $" + costoFinal);
    }

    mostrarResumen(): void {
        console.log("=== Resumen del Paciente ===");
        console.log("Paciente: " + this.nombre);
        console.log("Responsable: " + this.responsable);
        console.log("Codigo: " + this.codigoEstudiantil);
    }

}

class Sistema {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    pedirDatosPaciente(): void {
        this.rl.question("Ingrese su nombre: ", (nombre: string) => {
            this.rl.question("Ingrese su fecha de nacimiento: ", (fechaNacimiento: string) => {
                this.rl.question("Ingrese su edad: ", (edadInicial: string) => {
                    this.rl.question("Ingrese su telefono: ", (telefono: string) => {
                        this.rl.question("Ingrese el nombre del responsable: ", (responsable: string) => {
                            this.rl.question("Ingrese el telefono del responsable: ", (telefonoResponsable: string) => {
                                this.rl.question("Ingrese su codigo estudiantil: ", (codigoEstudiantil: string) => {
                                    let edad = parseInt(edadInicial);
                                    let paciente = new Consulta(nombre, fechaNacimiento, edad, telefono, responsable, telefonoResponsable, codigoEstudiantil);
                                    this.pedirTipoConsulta(paciente);
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    pedirTipoConsulta(paciente: Consulta): void {
        console.log("¿Que consulta desea?");
        console.log("1. Consulta General");
        console.log("2. Consulta de Especialidad");

        this.rl.question("Seleccione una opcion (1 o 2): ", (opcion: string) => {
            this.pedirSintomas(paciente, opcion);
        });
    }

    pedirSintomas(paciente: Consulta, opcion: string): void {
        this.rl.question("Ingrese sus sintomas: ", (sintomas: string) => {
            this.procesarConsulta(paciente, opcion, sintomas);
        });
    }

    procesarConsulta(paciente: Consulta, opcion: string, sintomas: string): void {
        if (opcion === "1") {
            paciente.consultaGeneral(sintomas);
        } else if (opcion === "2") {
            paciente.consultaEspecialidad(sintomas);
        } else {
            console.log("Opcion no valida");
        }

        paciente.mostrarResumen();

        this.rl.close()
    }
}

const sis = new Sistema();
sis.pedirDatosPaciente();