export interface IAlumCuso{
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;
}

export class AlumnoC implements IAlumCuso{
    constructor(public id: number,public nombre: string, public apellidos: string, public direccion: string,
                public fnac: string, public sexo: string){
                    
    }
}