class Heroi {
    constructor(nome, xp) {
        this._nome = nome;
        this._xp = xp;
        this._nivel = '';
    }
}

const heroi = new Heroi("Hebert", 7345);

if (heroi._xp < 1000) {
    heroi._nivel = "Ferro";
} else if (heroi._xp >= 1001 && heroi._xp <= 2000) {
    heroi._nivel = "Bronze";
} else if (heroi._xp >= 2001 && heroi._xp <= 5000) {
    heroi._nivel = "Prata";
} else if (heroi._xp >= 6001 && heroi._xp <= 7000) {
    heroi._nivel = "Ouro";
} else if (heroi._xp >= 7001 && heroi._xp <= 8000) {
    heroi._nivel = "Platina";
} else if (heroi._xp >= 8001 && heroi._xp <= 9000) {
    heroi._nivel = "Ascendente";
} else if (heroi._xp >= 9001 && heroi._xp <= 10000) {
    heroi._nivel = "Imortal";
} else if (heroi._xp >= 10001) {
    heroi._nivel = "Radiante";
}

console.log(`O Herói de nome ${heroi._nome} está no nível de ${heroi._nivel}`)