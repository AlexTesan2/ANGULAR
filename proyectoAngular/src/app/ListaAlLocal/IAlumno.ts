//Con la interfaz podemos crear tipos de datos como si fuesen clases
// IAlumno ahora sera un tipo de dato

export interface IAlumno{
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;
    nom_padre?: string;
}

//Opcion 2
export class Alumno implements IAlumno{
    constructor(public nombre: string, public apellidos: string, public direccion: string,
                public fnac: string, public sexo: string, public nom_padre?: string){
                    
    }
}

//Opcion 1
/*export class Alumno implements IAlumno{
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;

    constructor(nombre: string, apellidos: string, direccion: string, fnac: string, sexo: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.fnac = fnac;
        this.sexo = sexo;
    }
}*/