let leitor = require(`readline-sync`)
class Cozinheiro {
    nome: string
    idade: number 
    ano_xp: number

    constructor(nome:string, idade:number, ano_xp:number){
        this.nome = nome
        this.idade = idade
        this.ano_xp =  ano_xp
    }

    getCozinheiro(): void{
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos, e sou chefe há ${this.ano_xp}`)
    }

    setCozinheiro(): void{
        let nomeUp = leitor.question('Qual o nome do cozinheiro? ');
        let idadeUp = leitor.question('Qual a idade do cozinheiro? ');
        let ano_xp = leitor.question('Qual o tempo de xp do cozinheiro? ');
        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xp
    }
}

class Restaurante{
    cz: Cozinheiro // associação! = tipagem de um atributo com outra classe!
    nome: string
    endereço: string
    num_end: number

    constructor(cz:Cozinheiro, nome:string, endereço:string, num_end:number){
        this.cz = cz
        this.nome = nome
        this.endereço = endereço
        this.num_end = num_end
    }

    getRestaurante(): void{
        console.log(`Restaurante: ${this.nome}, localizado na ${this.endereço}, num${this.num_end}. o chefe do restaurante é ${this.cz}.`)
    }
        
    setRestaurante(): void{
        this.cz.setCozinheiro()
        let nomeUp = leitor.question('Qual o nome do restaurante? ');
        let enderecoUp = leitor.question('Qual o endereço? ');
        let num_endUp = leitor.question('Qual o numero? ');
        this.nome = nomeUp
        this.endereço = enderecoUp
        this.num_end =num_endUp
    }
}

//instancia da classe cozinheiro
//let chefThalles = new Cozinheiro('Thalles', 35, 15)

//instancia da classe Restaurante agregada com o objeto da classe cozinheiro 
//let variatto = new Restaurante(chefThalles, 'Variatto', 'Av.Imperatriz', 500)

let chefNovo = new Cozinheiro('Teste', 50, 20)

chefNovo.getCozinheiro()
chefNovo.setCozinheiro()
chefNovo.getCozinheiro

let restNovo = new Restaurante(chefNovo, 'Variatto','Imperatriz', 500)

restNovo.getRestaurante()
restNovo.setRestaurante()
restNovo.getRestaurante()
