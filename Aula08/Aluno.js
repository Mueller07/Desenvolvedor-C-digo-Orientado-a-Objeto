"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var rl = require('readline-sync');
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Aluno.prototype.media = function () {
        var media = (this.notaProva1 + this.notaProva2) / 2;
        return media;
    };
    Aluno.prototype.final = function () {
        var final = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
        return final;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
var Isabela = new Aluno(1, 'Isabela', 3, 7, 8);
console.log(Isabela.media());
