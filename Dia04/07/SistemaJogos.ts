var rl = require('readline-sync')

export class Jogos {
public titulo: string
protected genero: string
protected classificacaoEtaria: number
constructor(titulo: string, genero: string, classificacaoEtaria: number) {
    this.titulo = titulo
    this.genero = genero
    this.classificacaoEtaria = classificacaoEtaria
}


 public getDetalhes(): string {
    return(`Titulo: ${this.titulo} \nGenero: ${this.genero} \n Classificação: ${this.classificacaoEtaria}`)
 }


public setDuvidas(): void{
    let tituloUp = rl.question('Qual é o título do jogo?')
    let generoUp = rl.question('Qual é o gênero do jogo?')
    let classificacaoUp = rl.question('Qual é a classificação etária do jogo?')
    this.titulo = tituloUp
    this.genero = generoUp
    this.classificacaoEtaria = classificacaoUp
}
}

export class JogoEletronico extends Jogos{
    protected plataforma: string
    constructor(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
    
        super(titulo, genero, classificacaoEtaria)

    this.plataforma = plataforma

}

public getDetalhes(): string{
    return (`Titulo: ${this.titulo} \nGenero: ${this.genero} \n Classificação: ${this.classificacaoEtaria} \n Plataforma: ${this.plataforma}`)
}

 public setDuvidas(): void{
    let tituloUp = rl.question('Qual é o título do jogo?')
    let generoUp = rl.question('Qual é o gênero do jogo?')
    let classificacaoUp = rl.question('Qual é a classificação etária do jogo?')
    let plataformaUp = rl.question('Qual é a plataforma do jogo?')
    this.titulo = tituloUp
    this.genero = generoUp
    this.classificacaoEtaria = classificacaoUp
    this.plataforma = plataformaUp
}
}

export class JogoDeTabuleiro extends Jogos{
    protected jogadores: number
   constructor(titulo: string, genero: string, classificacaoEtaria: number, jogadores:number){
   
    super(titulo, genero, classificacaoEtaria)

    this.jogadores = jogadores

    }

    public getDetalhes(): string {
        return(`Titulo: ${this.titulo} \nGenero: ${this.genero} \n Classificação: ${this.classificacaoEtaria} \n ${this.jogadores}`)
     }

     public setDuvidas(): void{
        let tituloUp = rl.question('Qual é o título do jogo?')
        let generoUp = rl.question('Qual é o gênero do jogo?')
        let classificacaoUp = rl.question('Qual é a classificação etária do jogo?')
        let jogadoresUp = rl.question('Qual é a quantidade de jogadores?')
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classificacaoUp
        this.jogadores = jogadoresUp
    }
}

export class Jogo{
 titulo: string
}

class BibliotecaDeJogos{
    Jogos: Jogo[]
    constructor(){
        this.Jogos = []
}

public addJogos(jogo: Jogo): void{
    this.Jogos.push(jogo)
}

public removerJogo(): void{
    console.log(this.Jogos)
    let titulo = rl.question('Insira o titulo para excluir o jogo: ')
    this.Jogos = this.Jogos.filter(jogo => jogo.titulo !== titulo)
}
}

let jogoUm = new Jogos("Red Dead","Aventura",0)
let jogoDois = new Jogos("Super Meat Boy","Plataforma",0)
let jogoTres = new Jogos("Tetris","",0)
let jogoQuatro = new Jogos("","",0)

let estante = new BibliotecaDeJogos()

estante.addJogos(jogoUm)
estante.addJogos(jogoDois)
estante.addJogos(jogoTres)
estante.addJogos(jogoQuatro)

