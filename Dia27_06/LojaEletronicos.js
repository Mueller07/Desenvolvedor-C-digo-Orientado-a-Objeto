var Leitor = require('readline-sync');
var Produto = /** @class */ (function () {
    function Produto(nome, preco, marca, compraPreço) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.compraPreço = compraPreço;
    }
    Produto.prototype.calcularLucro = function () {
        var lucro = (this.preco - this.compraPreço);
        console.log('esse é seu lucro:', lucro);
    };
    Produto.prototype.getProduto = function () {
        console.log("Nome: ".concat(this.nome, " \nPre\u00E7o: ").concat(this.preco, " \n marca:").concat(this.marca));
    };
    Produto.prototype.setProduto = function () {
        var nomeUpdate = Leitor.question("Qual o nome do produto? ");
        var precoUpdate = Leitor.question("Qual o pre\u00E7o do produto? ");
        var marcaUpdate = Leitor.question("Qual a marca do produto? ");
        this.nome = nomeUpdate;
        this.preco = precoUpdate;
        this.marca = marcaUpdate;
    };
    return Produto;
}());
var Venda = /** @class */ (function () {
    function Venda(produto, quantidade, valor, data) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valor = valor;
        this.data = data;
    }
    Venda.prototype.valorTotal = function () {
        this.valor = this.valor * this.quantidade;
        console.log('o valor dessa compra foi de:', this.valor);
    };
    Venda.prototype.descontos = function () {
        this.valor = this.valor - (this.valor * 0.1);
        console.log('o desconto dessa compra foi o total de:', this.valor);
    };
    Venda.prototype.informacoesVenda = function () {
        console.log("Produto: ".concat(this.produto, " \nQuantidade: ").concat(this.quantidade));
    };
    Venda.prototype.getVenda = function () {
        console.log("Produto: ".concat(this.produto.nome, " \n Quantidade: ").concat(this.quantidade, " \n Valor :").concat(this.valor, " \n Data: ").concat(this.data));
    };
    Venda.prototype.setVenda = function () {
        var produtoUpdate = Leitor.question("Qual o nome do produto?  ");
        var quantidadeUpdate = Leitor.question("Qual a quantidade do produto? ");
        var valorUpdate = Leitor.question("Qual o valor do produto? ");
        var dataUpdate = Leitor.question("Qual a data de venda do produto? ");
        this.produto = produtoUpdate;
        this.quantidade = quantidadeUpdate;
        this.valor = valorUpdate;
        this.data = dataUpdate;
    };
    return Venda;
}());
var newProduto = new Produto('Televisao', 4500, 'LG', 3000);
var novoProduto = new Produto('Telefone', 4300, 'Iphone', 4000);
var novoProduto01 = new Produto('nootebook', 5000, 'Lenovo', 3400);
var novaVenda = new Venda(newProduto, 1, newProduto.preco, '27/06/2024');
var novaVenda01 = new Venda(novoProduto, 3, novoProduto.preco * 3, '27/06/2024');
var novaVenda02 = new Venda(novoProduto01, 2, novoProduto.preco * 2, '27/06/2024');
novaVenda.informacoesVenda();
novaVenda.getVenda();
novaVenda.setVenda();
novaVenda.valorTotal();
novaVenda.descontos();
novaVenda.getVenda();
novaVenda01.informacoesVenda();
novaVenda01.getVenda();
novaVenda01.setVenda();
novaVenda01.valorTotal();
novaVenda01.descontos();
