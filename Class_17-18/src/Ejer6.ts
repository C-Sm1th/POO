abstract class notificacion {

    mensaje: string

    constructor(mensaje: string){
        this.mensaje = mensaje
    }

    abstract enviar(mensaje: string): void;

}

class Email extends notificacion {

     enviar(): void {
         console.log("Enviando mensaje por Email...")
         console.log(this.mensaje)
     }

}

class sms extends notificacion {

    enviar(): void {
         console.log("Enviando mensaje por SMS...")
         console.log(this.mensaje)
     }

}

class whatsApp extends notificacion {

    enviar(): void {
         console.log("Enviando mensaje por WhatsApp...")
         console.log(this.mensaje)
     }

}

const em = new Email("Y si me doy de baja?")
const sm = new sms("Y si me doy de baja?")
const wa = new whatsApp("Y si me doy de baja?")

em.enviar()
sm.enviar()
wa.enviar()