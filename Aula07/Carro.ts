var rl = require('readline-sync')

export class Carro{
    carro: string
    tanque: number
    marca: string
    km: number

    constructor(carro: string, tanque: number, marca: string, km: number){
        this.carro = carro
        this.tanque = tanque
        this.marca = marca
        this.km = km

}
//mostrar dados do obj
public getCarro(): void{
    console.log(`Carro: ${this.carro} \nMarca: ${this.marca} \nGasolina: ${this.tanque} \nkmL: ${this.km}`)
}
public setCarro(): void{
    let marcaCarro = rl.question('Insira a marca do carro: ');
    let kmCarro = rl.questionInt('Insira a kilometragem por litro; ');
    let tanqueCarro = rl.questionInt('Insira a quantidade de gasolina no tanque: ');

    if(marcaCarro == ''){
        this.marca = this.marca 
    } else {
        this.marca = marcaCarro
    }

    if(kmCarro == null){
        this.km = this.km
    } else {
        this.km = kmCarro
    }

    if(tanqueCarro == null){
        this.tanque = this.tanque
    } else {
        this.tanque = tanqueCarro
    }
}

//calcular a viagem em relaçao a gasolina
public andar(): void{
    let distanciaViagem = rl.question('Insira a distancia a ser percorrida: ');
    let validacaoViagem = this.tanque - (distanciaViagem / this.km);

    if(validacaoViagem <= 0){
        console.log("Voce nao pode completar essa viagem.")}
            else{
                this.tanque -= validacaoViagem
                console.log(`voce percorreu ${distanciaViagem} km e tem `)
        }
    }

    // esse metodo serve para imprimir a qusntidade de fasolina no tanuqe 
    public obterGasolina(): number{
        return this.tanque
    }

    // adicionar gasolina no tanque 
    adicionarGasolina(valor: number): void{
        this.tanque += valor

    }

setGasolina(): void{   
    let carroUp = rl.question('qual e o carro? ')
    let marcaUp = rl.question('Qual é a marca do carro? ')
    let gasolinaUp = rl.question('Quanto de gasolina voce tem? ')
    let kmLUp = rl.question('Quantos km/L seu carro faz? ')
    this.carro = carroUp
    this.marca = marcaUp
    this.tanque = gasolinaUp
    this.km = kmLUp

}}

export class garagem {
    carro: Carro[]
    constructor(carro: Carro[]) {
        this.carro = carro
        }

    
}

