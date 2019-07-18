import { Marca } from "./marca.interface";

export interface Taller {
    id?:string;
    nombre:string;
    descripcion:string;
    horario:string;
    direccion:string;
    telefono:string;
    movil:string;
    latitud:number;
    longitud:number; 
    marcas?:Marca[]; 
}