var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Leitor = require('readline-sync');
var jogo = /** @class */ (function () {
    function jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    jogo.prototype.getDetalhes = function () {
        return "Titulo: ".concat(this.titulo, " \nGenero: ").concat(this.genero, " \nFaixa et\u00E1ria: ").concat(this.classificacaoEtaria);
    };
    jogo.prototype.setJogo = function () {
        var tituloUp = Leitor.question("Qual o nome do jogo? ");
        var generoUp = Leitor.question("Qual o genero do jogo?? ");
        var classUp = Leitor.question("Qual a Faixa Etaria do jogo? ");
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classUp;
    };
    return jogo;
}());
var jogoEletronico = /** @class */ (function (_super) {
    __extends(jogoEletronico, _super);
    function jogoEletronico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jogoEletronico.prototype.super = function (titulo, genero, classificacaoEtaria, plataforma) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.plataforma = plataforma;
    };
    jogoEletronico.prototype.getDetalhes = function () {
        return "Titulo: ".concat(this.titulo, " \nGenero: ").concat(this.genero, " \nFaixa et\u00E1ria: ").concat(this.classificacaoEtaria, " \n Plataforma: ").concat(this.plataforma);
    };
    jogoEletronico.prototype.setEletronico = function () {
        var tituloUp = Leitor.question("Qual o nome do jogo? ");
        var generoUp = Leitor.question("Qual o genero do jogo? ");
        var classUp = Leitor.question("Qual a Faixa Etaria do jogo? ");
        var plataformaUp = Leitor.question("Qual a plataforma do jogo? ");
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classUp;
        this.plataforma = plataformaUp;
    };
    return jogoEletronico;
}(jogo));
var jodoDeTabuleiro = /** @class */ (function (_super) {
    __extends(jodoDeTabuleiro, _super);
    function jodoDeTabuleiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jodoDeTabuleiro.prototype.super = function (titulo, genero, classificacaoEtaria, numeroDeJogadores) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.numeroDeJogadores = numeroDeJogadores;
    };
    jodoDeTabuleiro.prototype.getDetalhes = function () {
        return "Titulo: ".concat(this.titulo, " \nGenero: ").concat(this.genero, " \nFaixa et\u00E1ria: ").concat(this.classificacaoEtaria, " \n Numero de Jogadores: ").concat(this.numeroDeJogadores);
    };
    jodoDeTabuleiro.prototype.setTabuleiro = function () {
        var tituloUp = Leitor.question("Qual o nome do jogo? ");
        var generoUp = Leitor.question("Qual o genero do jogo? ");
        var classUp = Leitor.question("Qual a Faixa Etaria do jogo? ");
        var NumJogadoresUp = Leitor.question("Qual o numero de jogadores? ");
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classUp;
        this.numeroDeJogadores = NumJogadoresUp;
    };
    return jodoDeTabuleiro;
}(jogo));
var bibliotecaDeJogos = /** @class */ (function () {
    function bibliotecaDeJogos() {
    }
    bibliotecaDeJogos.prototype.adicionarJogo = function (jogo) {
        this.jogos.push(jogo);
    };
    bibliotecaDeJogos.prototype.removerJogo = function (titulo) {
    };
    return bibliotecaDeJogos;
}());
