import {Aluno} from './Aluno.ts'
const reader = require('readline-Sync')

let menu: boolean = true 

while(menu){
    console.log(`
    
    1 - Cadastrar nome e matricula (Aluno)
    2 - Cadastrata notas (Aluno)
    3 - Verificar media das provas (Aluno)
    4 - Varificar media final (Aluno)
    `);
}

let option = reader.questionInt('Escolha: ')

switch(option){
    case 1: 
    let nome = reader.question('Insira o nome do aluno: ');
    let matricula = reader.questionInt('Insira a matricula do aluno: ');
    let alunoNovo = inserirNotas(nome, matricula);
}

function inserirNotas(nome: string,matricula:number): Aluno {
    let prova1 = reader.questionInt("Digite a sua Nota 1: ")
    let prova2 = reader.questionInt("Digite a sua Nota 2: ")
    let trabalho = reader.questionInt("Digite a nota do trabalho: ")
    let alunoNovo = new Aluno(matricula,nome,prova1,prova2,trabalho)
    return alunoNovo
}