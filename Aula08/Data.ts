const rl = require('readline-sync')

export interface Data {
    constructor(dia: number, mes: number, ano: number): void;
    compara(outraData: Data): number;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): void;
    getAno(): number;
    isBissexto(): void;
    clone(): void;
}

export class Data implements Data {
    public dia: number
    public mes: number
    public ano: number
    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    compara(outraData: Data): number {
        if (this.ano > outraData.ano) {
            return 1
        }
        else if (this.ano < outraData.ano) {
            return -1
        }
        else
            if (this.mes > outraData.mes) {
                return 1
            }
            else if (this.mes < outraData.mes) {
                return -1
            }
            else
                if (this.dia > outraData.dia) {
                    return 1
                }
                else if (this.dia < outraData.dia) {
                    return -1
                }
                else {
                    return 0
                }
    }

    getDia(): number {
        return this.dia
    }

    getMes(): number {
        return this.mes
    }

    getMesExtenso(): void {
        switch (this.mes) {
            case 1:
                console.log("Janeiro")
            case 2:
                console.log("Fevereiro")
            case 3:
                console.log("Março")
            case 4:
                console.log("Abril")
            case 5:
                console.log("maio")
            case 6:
                console.log("junho")
            case 7:
                console.log("julho")
            case 8:
                console.log("agosto")
            case 9:
                console.log("setembro")
            case 10:
                console.log("Outubro")
            case 11:
                console.log("Novembro")
            case 12:
                console.log("Dezembro")
        }
    }

    getAno(): number {
        return this.ano
    }

    isBissexto(): void {
        let bissexto = (this.ano % 4 == 0)
        if (bissexto == true){
            console.log("O ano é bissexto")
        }
        else{
            console.log("O ano não é bissexto")
        }
    }

public clone(): Data {
    return new Data(this.dia, this.mes, this.ano)
}
}

let dataUm = new Data(10, 11, 1998)
let dataDois = new Data (20,12,2009)
let dataTres = dataUm.clone()

console.log(dataTres)
console.log('comprando datas')

dataUm.compara(dataUm)
dataDois.compara(dataDois)

console.log('mes extenso: ')
dataDois.getMesExtenso()

console.log('testando ano bissexto')
dataUm.isBissexto()
dataDois.isBissexto()
