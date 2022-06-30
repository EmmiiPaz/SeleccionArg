import { Jugador } from "./Jugador"

export class Arquero extends Jugador{

    constructor(nombre: string, apellido:string, edad:number, equipo:string){
        super(nombre,apellido,edad,equipo)
    }

    entrenar(): string {
        let energy= this.energia-10
        // alert(`El jugador ${this.nombre} ${this.apellido} entrenó y su energía es de ${energy}`)
        return `El jugador ${this.nombre} ${this.apellido} entrenó y su energía es de ${energy}`
        
    }

}