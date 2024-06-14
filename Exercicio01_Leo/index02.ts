import { Guerreiro } from "./Guerreiro";
import { Monstro } from "./Monstro";


let novoGuerreiro:Guerreiro = new Guerreiro('will', 'mago', 50);
let novoMonstro:Monstro = new Monstro('Demogorgon');

novoMonstro.status()
novoGuerreiro.ataca(novoMonstro)
novoMonstro.status()

