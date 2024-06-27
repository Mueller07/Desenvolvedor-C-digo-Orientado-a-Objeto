class Animal {
    nome: string

    constructor(nome: string){
        this.nome = nome
    }

    fazerBarulho(): void{}
}

class Cachorro extends Animal {
    fazerBarulho(): void {
        console.log(`${this.nome} faz: AU AU 🐶`)
    }
}

let novoCachorro = new Cachorro('Teste')
novoCachorro.fazerBarulho()