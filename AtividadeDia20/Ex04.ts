let leitor1 = require('readline-sync')
class Aluno{
    nome: string
    notas: Array<number> // notas array

    constructor(nome:string){
        this.nome = nome 
        this.notas = []
    }

    registroNotas(): void{
        let nota1: number = leitor1.questionInt('Insira a primeira nota: ')
        let nota2: number =  leitor1.questionInt('Insira a segunda nota: ')

        this.notas.push(nota1)
        this.notas.push(nota2)
    }

    calcularMedia(): void{
        let media = (this.notas[0] + this.notas[1]) / 2
        console.log(`A média dos valores é ${media}`);
    }
}
    
let nomeAluno = leitor.question('Qual o nome do aluno que gostaria de verificar a media?')

let newAluno = new Aluno(nomeAluno)

newAluno.registroNotas()
newAluno.calcularMedia()
