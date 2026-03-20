import * as readline from "readline";

class compra{
   private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar(): void{
        this.obten_datos()
    }

    obten_datos():void {
        this.rl.question("Ingrese su nombre: ", (nombre: string) => {
            this.rl.question("Ingrese su telefono: ", (telefono: string) => {
                this.rl.question("Ingrese su dui: ", (dui: string) => {
                    this.rl.question("Ingrese su correo: ", (correo: string) => {
                        this.rl.question("Ingrese la fecha de compra (Ano-Mes-Dia): ", (fecha) => {
                            this.rl.question("Seleccione el numero del producto: 1: Laptop  2: pantalon 3: bota  :", (selecccion: string) => {
                                
                                const celular = Number(telefono)
                                const DUI = Number(dui)

                                this.asignar(nombre, celular, DUI, correo, fecha, selecccion)
                            })
                        })

                    })
                })
            })
        })
    }

    asignar(nombre: string, celular: number, DUI: number, correo: string, fecha: string, seleccion: string){
        let precio = 0
        let nombrePro = ""
        let categoria = ""

        if(seleccion === "1"){
           nombrePro = "Laptop Asus"
           precio = 900
           categoria = "tecnologia"
        }else if(seleccion === "2"){
           nombrePro = "Pantalon Guggi"
           precio = 100
           categoria = "ropa"
        }else if(seleccion === "3"){
           nombrePro = "Bota de cuero"
           precio = 90
           categoria = "calzado"
        }

        this.calcDescuento(nombre, celular, DUI, correo, fecha, seleccion, nombrePro, precio, categoria)

    }

    calcDescuento(nombre: string, celular: number, DUI: number, correo: string, fecha: string, selecccion: string, nombrePro: string, precio: number, categoria: string){
        let descuento = 0
        let iva = 0
        let precFinal = 0

        if(categoria === "tecnologia"){
            descuento = precio * 0.10
            iva = precio * 0.13
            precFinal = precio - descuento + iva
        }else if(categoria === "ropa"){
            descuento = precio * 0.15
            iva = precio * 0.13
            precFinal = precio - descuento + iva
        }else if(categoria === "calzado"){
            descuento = precio * 0.20
            iva = precio * 0.13
            precFinal = precio - descuento + iva
        }

        this.mostrar(nombre, celular, DUI, correo, fecha, selecccion, nombrePro, precio, categoria, descuento, iva, precFinal)
    }

    mostrar(nombre: string, celular: number, DUI: number, correo: string, fecha: string, selecccion: string, nombrePro: string, precio: number, categoria: string, descuento: number, iva: number, precFinal: number){
        console.log("*****Code 0001*****")
        console.log(`Cliente: ${nombre}`)
        console.log(`DUI: ${DUI}`)
        console.log(`Telefono: ${celular}`)
        console.log(`Fecha: ${fecha}`)
        console.log("---------------------------------")
        console.log("Cantidad      Producto        Total")
        console.log(`1             ${nombrePro}    $${precio}`)
        console.log(`              Descuento:      $${descuento}`)
        console.log(`              Iva:            $${iva}`)
        console.log(`TOTAL A PAGAR:                $${precFinal}`)

        this.cerrar()
    }

    cerrar(): void {
        this.rl.close();
    }
}

const com = new compra()
com.iniciar()

