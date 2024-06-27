var Leitor = require('readline-sync')

class Produto {
    nome: string
    preco: number
    marca: string
    compraPreço : number
    constructor(nome: string, preco:number, marca: string, compraPreço: number){
        this.nome = nome
        this.preco = preco
        this.marca = marca
        this.compraPreço = compraPreço
    }

    calcularLucro(): void{
        let lucro = (this.preco - this.compraPreço) 
        console.log('esse é seu lucro:', lucro)
    }

    getProduto(): void{
        console.log(`Nome: ${this.nome} \nPreço: ${this.preco} \n marca:${this.marca}`)
    }

    setProduto(): void{
        let nomeUpdate = Leitor.question(`Qual o nome do produto? `);
        let precoUpdate = Leitor.question(`Qual o preço do produto? `);
        let marcaUpdate = Leitor.question(`Qual a marca do produto? `);
        this.nome = nomeUpdate
        this.preco = precoUpdate
        this.marca = marcaUpdate

    }
}

class Venda {
    produto: Produto
    quantidade: number
    valor: number
    data: string
    constructor(produto: Produto, quantidade: number, valor: number, data: string){
        this.produto = produto
        this.quantidade = quantidade
        this.valor = valor 
        this.data = data
    }

    valorTotal(): void{
        this.valor = this.valor * this.quantidade
        console.log('o valor dessa compra foi de:', this.valor);
    }

    descontos(): void{
        this.valor = this.valor - (this.valor * 0.1)
        console.log('o desconto dessa compra foi o total de:', this.valor );
    }

    informacoesVenda(): void{
        console.log(`Produto: ${this.produto} \nQuantidade: ${this.quantidade}`);
    }
    getVenda(): void{
            console.log(`Produto: ${this.produto.nome} \n Quantidade: ${this.quantidade} \n Valor :${this.valor} \n Data: ${this.data}`)
}
    setVenda(): void{
        let produtoUpdate = Leitor.question(`Qual o nome do produto?  `);
        let quantidadeUpdate = Leitor.question(`Qual a quantidade do produto? `);
        let valorUpdate = Leitor.question(`Qual o valor do produto? `);
        let dataUpdate = Leitor.question(`Qual a data de venda do produto? `);
        this.produto = produtoUpdate
        this.quantidade = quantidadeUpdate
        this.valor = valorUpdate
        this.data = dataUpdate

    }
}


let newProduto = new Produto ('Televisao', 4500, 'LG', 3000);
let novoProduto = new Produto ('Telefone', 4300, 'Iphone', 4000);
let novoProduto01 = new Produto ('nootebook', 5000, 'Lenovo', 3400);
let novaVenda = new Venda (newProduto, 1, newProduto.preco, '27/06/2024');
let novaVenda01 = new Venda (novoProduto, 3, novoProduto.preco * 3, '27/06/2024');
let novaVenda02 = new Venda (novoProduto01, 2, novoProduto.preco * 2, '27/06/2024');

novaVenda.informacoesVenda()
novaVenda.getVenda()
novaVenda.setVenda()
novaVenda.valorTotal()
novaVenda.descontos()
novaVenda.getVenda()
novaVenda01.informacoesVenda()
novaVenda01.getVenda()
novaVenda01.setVenda()
novaVenda01.valorTotal()
novaVenda01.descontos()

