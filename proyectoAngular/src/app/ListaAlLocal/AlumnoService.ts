//El service es el repositorio donde se guardaran los datos
// (no es un component, no tiene html )
import { Injectable } from "@angular/core";
import { Alumno } from "./IAlumno";

@Injectable()
export class AlumnosService{
    getAlumnos(): Alumno[]{
        return [
            {nombre: 'desde', apellidos: 'El', direccion: 'service', fnac: '2/28/1958', sexo: 'Hombre', nom_padre: 'Pepe' },
            {nombre: 'Juana', apellidos: 'Garcia', direccion: 'Madrid', fnac: '10/22/1988', sexo: 'Mujer' },
            {nombre: 'Yo', apellidos: 'Mi apellido', direccion: 'mi casa', fnac: '4/30/1947' ,sexo: 'Hombre'},
            {nombre: 'Laura', apellidos: 'Gomez', direccion: 'Barcelona', fnac: '12/1/1945' , sexo: 'Mujer'}
        ];
    }
}



/*new Alumno('Perico', 'Delgado', 'Segovia', '2/28/1958', 'Hombre', 'Pepe'),
new Alumno('Juana', 'Garcia', 'Madrid', '10/22/1988', 'Mujer'),
new Alumno('Yo', 'Mi apellido', 'mi casa', '4/30/1947', 'Hombre'),
new Alumno('Laura', 'Gomez', 'Barcelona', '12/1/1945', 'Mujer')*/