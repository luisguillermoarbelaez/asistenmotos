import { Marca } from "./marca.interface";

export interface Usuario {
    id?:string;
    nombre:string;
    apellido:string;
    sexo:string;
    edad:string;
    direccion:string;
    telefono:string;
    movil:string;
    latitud:number;
    longitud:number; 
    marcas?:Marca[]; 
}