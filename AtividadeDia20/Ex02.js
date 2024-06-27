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
var pessoa = /** @class */ (function () {
    function pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    pessoa.prototype.Cumprimentar = function () {
    };
    return pessoa;
}());
var criança = /** @class */ (function (_super) {
    __extends(criança, _super);
    function criança() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    criança.prototype.Cumprimentar = function () {
        console.log("Oi tudo bem? meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos, sou uma crian\u00E7a."));
    };
    return criança;
}(pessoa));
var novaCrianca = new criança("bella", 16);
var adulto = /** @class */ (function (_super) {
    __extends(adulto, _super);
    function adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    adulto.prototype.Cumprimentar = function () {
        console.log("Oi tudo bem? meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos, sou um adulto."));
    };
    return adulto;
}(pessoa));
var novoAdulto = new adulto("je", 37);
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.Cumprimentar = function () {
        console.log("Oi tudo bem? meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos, sou um idoso."));
    };
    return Idoso;
}(pessoa));
var novoIdoso = new Idoso('jose', 78);
novaCrianca.Cumprimentar();
novoAdulto.Cumprimentar();
novoIdoso.Cumprimentar();
