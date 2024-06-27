class Data {
    dia: number
    mes: string
    ano: number

    constructor(dia:number, mes:string, ano:number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    ImprimaCosole(): void{
        console.log(`Sao Leopoldo dia ${this.dia} de ${this.mes}, ${this.ano}`)
    }
}

let newData = new Data(21, 'Junho', 2024)

newData.ImprimaCosole()