"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class juego {
    constructor(nickname, vida) {
        this.nickname = nickname;
        this.vida = vida;
    }
    get vidaCambio() {
        return this.vida;
    }
    set vidaCambio(valor) {
        this.vida = this.vida;
    }
}
class mundo1 extends juego {
    constructor(nickname, vida) {
        super(nickname, vida);
    }
    aventura() {
        let nuevaVida = this.vidaCambio - 30;
        console.log("La nueva vida es de: " + nuevaVida + "%");
    }
    acuatico() {
        let nuevaVida = this.vidaCambio - 50 + 10;
        console.log("La nueva vida es de: " + nuevaVida + "%");
    }
    endgame() {
        let nuevaVida = this.vidaCambio - 50;
        console.log("La nueva vida es de: " + nuevaVida + "%");
    }
}
let mund = new mundo1("Juan", 100);
mund.aventura();
mund.acuatico();
mund.endgame();
/////EJERCICIO 2
class personaje {
    constructor(nickname, vida) {
        this.nickname = nickname;
        this.vida = vida;
    }
    get vidaCambio() {
        return this.vida;
    }
    set vidaCambio(valor) {
        this.vida = this.vida;
    }
}
class mundo2 extends personaje {
    constructor(nickname, vida) {
        super(nickname, vida);
    }
    aventura() {
        let nuevaVida = this.vidaCambio - 30;
        console.log("La nueva vida es de: " + nuevaVida + "%");
        this.acuatico(nuevaVida);
    }
    acuatico(nuevaVida) {
        let nuevaVida2 = nuevaVida - 50 + 10;
        console.log("La nueva vida es de: " + nuevaVida2 + "%");
        this.endgame(nuevaVida2);
    }
    endgame(nuevaVida2) {
        let nuevaVida3 = nuevaVida2 - 50;
        if (nuevaVida3 >= 0) {
            console.log("La nueva vida es de: " + nuevaVida3 + "%");
        }
        else {
            console.log("Te mandaron a mimir. GameOver");
        }
    }
}
let mund2 = new mundo2("Juan", 100);
mund2.aventura();
//# sourceMappingURL=Ejer1.js.map