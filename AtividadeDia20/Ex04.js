var leitor = require('readline-sync');
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    Aluno.prototype.registroNotas = function () {
        var nota1 = leitor.questionInt('Insira a primeira nota: ');
        var nota2 = leitor.questionInt('Insira a segunda nota: ');
        this.notas.push(nota1);
        this.notas.push(nota2);
    };
    Aluno.prototype.calcularMedia = function () {
        var media = (this.notas[0] + this.notas[1]) / 2;
        console.log("A m\u00E9dia dos valores \u00E9 ".concat(media));
    };
    return Aluno;
}());
var nomeAluno = leitor.question('Qual o nome do aluno que gostaria de verificar a media?');
var newAluno = new Aluno(nomeAluno);
newAluno.registroNotas();
newAluno.calcularMedia();
