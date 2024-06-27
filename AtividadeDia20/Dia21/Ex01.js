var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.ImprimaCosole = function () {
        console.log("Sao Leopoldo dia ".concat(this.dia, " de ").concat(this.mes, ", ").concat(this.ano));
    };
    return Data;
}());
var newData = new Data(21, 'Julho', 2024);
newData.ImprimaCosole();
