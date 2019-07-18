import { Marca } from "./marca.interface";

export interface Prestador {
    id?:string;
    descripcion:string;
    horario:string;
    nombre:string;
    direccion:string;
    telefono:string;
    movil:string;
    latitud:number;
    longitud:number;
    tipo:string; 
    marcas?:Marca[]; 
}

