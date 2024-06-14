"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guerreiro_1 = require("./Guerreiro");
var Monstro_1 = require("./Monstro");
var novoGuerreiro = new Guerreiro_1.Guerreiro('will', 'mago', 50);
var novoMonstro = new Monstro_1.Monstro('Demogorgon');
novoMonstro.status();
novoGuerreiro.ataca(novoMonstro);
novoMonstro.status();
