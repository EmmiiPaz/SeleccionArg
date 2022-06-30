export abstract class Jugador{
    protected nombre: string;
    protected apellido: string;
    protected edad: number;
    protected equipo: string;
    protected energia: number;

    constructor( nombre: string, apellido:string, edad:number, equipo:string){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.equipo = equipo
        this.energia= 100
    }
    abstract entrenar(): string;

}
