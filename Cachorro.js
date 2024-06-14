"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cachorro = void 0;
var cachorro = /** @class */ (function () {
    function cachorro(nome, peso, raca) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
    }
    cachorro.prototype.latir = function () {
        console.log("Au Au!");
    };
    cachorro.prototype.comer = function (quantidade) {
        console.log("O cachorro comeu ".concat(quantidade, " coxinhas."));
    };
    return cachorro;
}());
exports.cachorro = cachorro;
