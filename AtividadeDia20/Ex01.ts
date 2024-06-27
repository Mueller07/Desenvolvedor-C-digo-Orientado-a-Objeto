class Pesso4{
    nome: string
    idade: number

    constructor(nome:string, idade:number){
        this.nome = nome
        //novaPessoa.idade = 16
        //instancia da classe = obj da classe
        this.idade = idade
    }

    Cumprimentar(): void{
    }
}
class isaaaaa extends Pesso4{
    Cumprimentar(): void {
        console.log(`Oi tudo bem? meu nome é ${this.nome} e tenho ${this.idade} anos.`)
        
    }

}

let novabela = new isaaaaaa("bella",16)
novabela.Cumprimentar()

