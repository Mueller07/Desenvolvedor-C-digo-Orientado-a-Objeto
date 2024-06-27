var leitor = require("readline-sync");
var Cozinheiro = /** @class */ (function () {
    function Cozinheiro(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Cozinheiro.prototype.getCozinheiro = function () {
        console.log("Ol\u00E1 meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos, e sou chefe h\u00E1 ").concat(this.ano_xp));
    };
    Cozinheiro.prototype.setCozinheiro = function () {
        var nomeUp = leitor.question('Qual o nome do cozinheiro? ');
        var idadeUp = leitor.question('Qual a idade do cozinheiro? ');
        var ano_xp = leitor.question('Qual o tempo de xp do cozinheiro? ');
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.ano_xp = ano_xp;
    };
    return Cozinheiro;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(cz, nome, endereço, num_end) {
        this.cz = cz;
        this.nome = nome;
        this.endereço = endereço;
        this.num_end = num_end;
    }
    Restaurante.prototype.getRestaurante = function () {
        console.log("Restaurante: ".concat(this.nome, ", localizado na ").concat(this.endereço, ", num").concat(this.num_end, ". o chefe do restaurante \u00E9 ").concat(this.cz, "."));
    };
    Restaurante.prototype.setRestaurante = function () {
        var czUp = leitor.question('Qual o chefe do restaurante? ');
        var nomeUp = leitor.question('Qual o nome do restaurante? ');
        var enderecoUp = leitor.question('Qual o endereço? ');
        var num_endUp = leitor.question('Qual o numero? ');
        this.cz = czUp;
        this.nome = nomeUp;
        this.endereço = enderecoUp;
        this.num_end = num_endUp;
    };
    return Restaurante;
}());
//instancia da classe cozinheiro
//let chefThalles = new Cozinheiro('Thalles', 35, 15)
//instancia da classe Restaurante agregada com o objeto da classe cozinheiro 
//let variatto = new Restaurante(chefThalles, 'Variatto', 'Av.Imperatriz', 500)
var chefNovo = new Cozinheiro('Teste', 50, 20);
chefNovo.getCozinheiro();
chefNovo.setCozinheiro();
chefNovo.getCozinheiro;
var restNovo = new Restaurante(this.cz, 'nome', 'end', 90);
