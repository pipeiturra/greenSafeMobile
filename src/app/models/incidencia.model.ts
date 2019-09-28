export class Incidencia {
    usuario: string;
    desc: string;
    categoria: string;
    latitud: number;
    longitud: number;
    gravedad: string;
    privada: boolean;

    constructor( desc: string, categoria: string, latitud: number, longitud: number, 
        gravedad: string, privada: boolean = true) {

    }
}