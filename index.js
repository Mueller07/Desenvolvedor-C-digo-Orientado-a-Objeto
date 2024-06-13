var readlineSync = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(rodas, motor, cor, modelo, marca, km) {
        this.rodas = rodas;
        this.motor = motor;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
        this.km = km;
    }
    Carro.prototype.acelerar = function () {
        console.log("Meu carro acelera");
    };
    Carro.prototype.dirigindo = function () {
        console.log("Estou dirigindo meu carro a");
    };
    Carro.prototype.velocidade = function () {
        console.log("Meu carro atingiu ".concat(this.km, " km/h"));
    };
    return Carro;
}());
var rodas = Number(readlineSync.question('Qual o aro da roda do carro? '));
var motor = Number(readlineSync.question('Qual a pontecia do motor do carro? '));
var cor = readlineSync.question('Qual a cor do carro? ');
var modelo = readlineSync.question('Qual o modelo do carro? ');
var marca = readlineSync.question('Qual a marca do carro? ');
var km = Number(readlineSync.question("Quantos km o carro atinge? "));
var novoCarro = new Carro(rodas, motor, cor, modelo, marca, km);
