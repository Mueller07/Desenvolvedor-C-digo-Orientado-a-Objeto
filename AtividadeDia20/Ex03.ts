class Livro{
    titulo: string
    autor: string
    anoPublicacao: number

    constructor(titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    obterDetalhes(): void{
        console.log(`Titulo: ${this.titulo}, autor:${this.autor}, Ano de Publicação: ${this.anoPublicacao}`)
    }
}

let newLivro = new Livro(`As aventuras de bebel`, "bebel", 1990)
newLivro.obterDetalhes()