import { title } from "process"
import {Jogos}from "./SistemaJogos"

export class bibliotecaDeJogos {
    jogos: Jogos[] = []

    public addJogo (jogo: Jogos): void{
        this.jogos.push(jogo)
    }

    public removerJogo(): void{
        console.log(this.jogos)
        this.jogos = this.jogos.filter(jogo => jogo.titulo !== title)
    }
}


