abstract class juego{
    nickname: string;
    private vida: number;

    constructor(nickname: string, vida: number){
        this.nickname = nickname
        this.vida = vida
    }

    get vidaCambio():number{
        return this.vida
    }

    set vidaCambio(valor:number){
        this.vida = this.vida
    }

}

class mundo1 extends juego{

    constructor(nickname: string, vida: number){
        super(nickname, vida)
    }

    aventura(): void{
        let nuevaVida = this.vidaCambio - 30
        console.log("La nueva vida es de: " + nuevaVida + "%")
    }

    acuatico(): void{
        let nuevaVida = this.vidaCambio - 50 + 10
        console.log("La nueva vida es de: " + nuevaVida + "%")
    }

    endgame(): void{
        let nuevaVida = this.vidaCambio - 50
        console.log("La nueva vida es de: " + nuevaVida + "%")
    }
}

let mund = new mundo1("Juan", 100)
mund.aventura()
mund.acuatico()
mund.endgame()



/////EJERCICIO 2

abstract class personaje{
    nickname: string;
    private vida: number;

    constructor(nickname: string, vida: number){
        this.nickname = nickname
        this.vida = vida
    }

    get vidaCambio():number{
        return this.vida
    }

    set vidaCambio(valor:number){
        this.vida = this.vida
    }

}

class mundo2 extends personaje{

    constructor(nickname: string, vida: number){
        super(nickname, vida)
    }

    aventura(): void{
        let nuevaVida = this.vidaCambio - 30
        console.log("La nueva vida es de: " + nuevaVida + "%")
        this.acuatico(nuevaVida)
    }

    acuatico(nuevaVida: number): void{
        let nuevaVida2 = nuevaVida - 50 + 10
        console.log("La nueva vida es de: " + nuevaVida2 + "%")
        this.endgame(nuevaVida2)
    }

    endgame(nuevaVida2: number): void{
        let nuevaVida3 = nuevaVida2 - 50
        if(nuevaVida3 >= 0){
        console.log("La nueva vida es de: " + nuevaVida3 + "%")}
        else {
            console.log("Te mandaron a mimir. GameOver")
        }
    }
}

let mund2 = new mundo2("Juan", 100)
mund2.aventura()
