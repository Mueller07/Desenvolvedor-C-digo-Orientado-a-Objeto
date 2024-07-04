var Leitor = require('readline-sync')

class jogo {
    protected titulo: string
    protected genero: string
    protected classificacaoEtaria: number

    constructor(titulo: string,  genero:string, classificacaoEtaria: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
    }

    public getDetalhes(): string{
        return `Titulo: ${this.titulo} \nGenero: ${this.genero} \nFaixa etária: ${this.classificacaoEtaria}`
    }
    
    public setJogo(): void{
        let tituloUp = Leitor.question(`Qual o nome do jogo? `);
        let generoUp = Leitor.question(`Qual o genero do jogo?? `);
        let classUp = Leitor.question(`Qual a Faixa Etaria do jogo? `);
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classUp
        }
}

class jogoEletronico extends jogo {
    protected plataforma: string

    super(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
        this.plataforma = plataforma
    }
    
    public getDetalhes(): string{
        return `Titulo: ${this.titulo} \nGenero: ${this.genero} \nFaixa etária: ${this.classificacaoEtaria} \n Plataforma: ${this.plataforma}`
    }

    public setEletronico(): void{
        let tituloUp = Leitor.question(`Qual o nome do jogo? `)
        let generoUp = Leitor.question(`Qual o genero do jogo? `)
        let classUp = Leitor.question(`Qual a Faixa Etaria do jogo? `)
        let plataformaUp = Leitor.question(`Qual a plataforma do jogo? `);
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classUp
        this.plataforma = plataformaUp
      }
    }

class jodoDeTabuleiro extends jogo{
    protected numeroDeJogadores: number

    super(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
        this.numeroDeJogadores = numeroDeJogadores
    }

    public getDetalhes(): string {
        return `Titulo: ${this.titulo} \nGenero: ${this.genero} \nFaixa etária: ${this.classificacaoEtaria} \n Numero de Jogadores: ${this.numeroDeJogadores}`
    }

    public setTabuleiro(): void{
        let tituloUp = Leitor.question(`Qual o nome do jogo? `)
        let generoUp = Leitor.question(`Qual o genero do jogo? `)
        let classUp = Leitor.question(`Qual a Faixa Etaria do jogo? `)
        let NumJogadoresUp = Leitor.question(`Qual o numero de jogadores? `);
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classUp
        this.numeroDeJogadores = NumJogadoresUp
        
      }
    }

    class bibliotecaDeJogos {
        jogos: jogo[]

        adicionarJogo (jogo: jogo): void{
            this.jogos.push(jogo)
        }

        removerJogo(titulo: string): void{
        }
    }
