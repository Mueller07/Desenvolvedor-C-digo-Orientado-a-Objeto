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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.Cumprimentar = function () {
    };
    return Pessoa;
}());
var isaaaaaa = /** @class */ (function (_super) {
    __extends(isaaaaaa, _super);
    function isaaaaaa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    isaaaaaa.prototype.Cumprimentar = function () {
        console.log("Oi tudo bem? meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos."));
    };
    return isaaaaaa;
}(Pessoa));
var novabella = new isaaaaaa("bella", 16);
novabella.Cumprimentar();
