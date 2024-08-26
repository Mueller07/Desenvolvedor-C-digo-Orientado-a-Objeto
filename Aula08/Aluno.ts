const rl = require('readline-sync')


export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}

export class Aluno implements Aluno {
    public matricula: number
    public nome: string
    public notaProva1: number
    public notaProva2: number   
    public notaTrabalho: number

    constructor (matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    media(): number{
        let media =  (this.notaProva1 + this.notaProva2) / 2
        return media 
    }

    final(): number{
        let final = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3 
        return final
    }

    getAluno(): void{
        console.log(`Nome: ${this.nome}, Matricula: ${this.matricula}, Nota 1Prova: ${this.notaProva1}, Nota 2Prova: ${this.notaProva2} , Nota Trabalho: ${this.notaTrabalho}`)
    }
    setAluno(): void{
        let nome = rl.question("Digite o nome do Aluno: ")
        let matricula = rl.questionInt("Digite sua matricula: ") 
        let prova1 = rl.questionInt("Digite a sua 1Nota: ")
        let prova2 = rl.questionInt("Digite a sua 2Nota: ")
        let trabalho = rl.questionInt("Digite a nota do trabalho: ")
        this.nome = nome
        this.matricula = matricula
        this.notaProva1 = prova1
        this.notaProva2 = prova2
        this.notaTrabalho = trabalho
    }
}

let Isabela = new Aluno(1, 'Isabela', 3, 7, 8);
console.log(Isabela.media());