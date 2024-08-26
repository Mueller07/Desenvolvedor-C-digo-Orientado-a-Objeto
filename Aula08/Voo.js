"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Voo = /** @class */ (function () {
    function Voo(numeroVoo, data, cadeira) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.cadeira = [];
    }
    Voo.prototype.qntdCadeiras = function () {
        for (var i = 0; i < 99; i++) {
            this.cadeira.push(0);
        }
    };
    Voo.prototype.proximoAcentoLivre = function () {
        var i;
        var n = true;
        while (n == true) {
            if (this.cadeira[i] == 0) {
                console.log(this.cadeira);
                n = false;
            }
            i++;
        }
    };
    Voo.prototype.verifica = function (cadeira) {
        if (cadeira == 0) {
            console.log("a cadeira está livre");
        }
        else {
            console.log("a cadeira não esta livre");
        }
    };
    Voo.prototype.ocupa = function (cadeira) {
        var i;
        for (i = 0; i <= this.cadeira.length; i++) {
            if (cadeira == i && this.cadeira[i] == 0) {
                console.log('Voce ocupou essa cadeira');
                this.cadeira[i] = 1;
            }
            else {
                console.log('Essa cadeira esta ocupada');
            }
        }
    };
    Voo.prototype.vaga = function () {
        var i = 0;
        var n = 0;
        while (this.cadeira.length[i] < 99) {
            i++;
            if (this.cadeira[i] == 0) {
                n++;
            }
        }
        return n;
    };
    Voo.prototype.getVoo = function () {
        console.log("Seu voou \u00E9: ".concat(this.numeroVoo));
        return this.numeroVoo;
    };
    Voo.prototype.getData = function () {
        console.log("Data do voo: ".concat(this.data));
    };
    Voo.prototype.clone = function () {
        var vooDois = new Voo(this.numeroVoo, this.data, this.cadeira);
    };
    return Voo;
}());
