"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var rl = require('readline-sync');
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.compara = function (outraData) {
        if (this.ano > outraData.ano) {
            return 1;
        }
        else if (this.ano < outraData.ano) {
            return -1;
        }
        else if (this.mes > outraData.mes) {
            return 1;
        }
        else if (this.mes < outraData.mes) {
            return -1;
        }
        else if (this.dia > outraData.dia) {
            return 1;
        }
        else if (this.dia < outraData.dia) {
            return -1;
        }
        else {
            return 0;
        }
    };
    Data.prototype.getDia = function () {
        return this.dia;
    };
    Data.prototype.getMes = function () {
        return this.mes;
    };
    Data.prototype.getMesExtenso = function () {
        switch (this.mes) {
            case 1:
                console.log("Janeiro");
            case 2:
                console.log("Fevereiro");
            case 3:
                console.log("Março");
            case 4:
                console.log("Abril");
            case 5:
                console.log("maio");
            case 6:
                console.log("junho");
            case 7:
                console.log("julho");
            case 8:
                console.log("agosto");
            case 9:
                console.log("setembro");
            case 10:
                console.log("Outubro");
            case 11:
                console.log("Novembro");
            case 12:
                console.log("Dezembro");
        }
    };
    Data.prototype.getAno = function () {
        return this.ano;
    };
    Data.prototype.isBissexto = function () {
        var bissexto = (this.ano % 4 == 0);
        if (bissexto == true) {
            console.log("O ano é bissexto");
        }
        else {
            console.log("O ano não é bissexto");
        }
    };
    Data.prototype.clone = function () {
        return new Data(this.dia, this.mes, this.ano);
    };
    return Data;
}());
exports.Data = Data;
var dataUm = new Data(10, 11, 1998);
var dataDois = new Data(20, 12, 2009);
var dataTres = dataUm.clone();
console.log(dataTres);
console.log('comprando datas');
dataUm.compara(dataUm);
dataDois.compara(dataDois);
console.log('mes extenso: ');
dataDois.getMesExtenso();
console.log('testando ano bissexto');
dataUm.isBissexto();
dataDois.isBissexto();
