class pessoa{
    nome: string
    idade: number

    constructor(nome:string, idade:number){
        this.nome = nome
        this.idade = idade
    }

    Cumprimentar(): void{
    }
}
class criança extends pessoa{
    Cumprimentar(): void {
        console.log(`Oi tudo bem? meu nome é ${this.nome} e tenho ${this.idade} anos, sou uma criança.`)
        
    }

}

let novaCrianca = new criança("bella",16)

class adulto extends pessoa { 
    Cumprimentar(): void {
        console.log(`Oi tudo bem? meu nome é ${this.nome} e tenho ${this.idade} anos, sou um adulto.`)
        
}
}

let novoAdulto = new adulto("je",37)

class Idoso extends pessoa {
    Cumprimentar(): void {
        console.log(`Oi tudo bem? meu nome é ${this.nome} e tenho ${this.idade} anos, sou um idoso.`)
        
}}

let novoIdoso = new Idoso('jose', 78)

novaCrianca.Cumprimentar()
novoAdulto.Cumprimentar()
novoIdoso.Cumprimentar()