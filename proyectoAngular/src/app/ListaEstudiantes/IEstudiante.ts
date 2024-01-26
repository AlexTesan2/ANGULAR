export interface IEstudiante{
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;
    nom_padre?: string;
}

// IAlumno ahora sera un tipo de dato


export class Alumno implements IEstudiante{
    //Metodo constructor: Opcion 2
    constructor(public nombre: string, public apellidos: string, public direccion: string,
                public fnac: string, public sexo: string, public nom_padre?: string){
    
    }
}

/*export class Alumno implements IEstudiante{  //Opcion 1
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;*/

    //Metodo constructor: Opcion 1
    /*constructor(nombre: string, apellidos: string, direccion: string, fnac: string, sexo: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.fnac = fnac;
        this.sexo = sexo;
    }
}*/