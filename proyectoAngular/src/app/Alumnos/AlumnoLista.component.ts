import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

//esta es la VISTA
@Component({
    selector: 'lista-alumnos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'AlumnoLista.component.html',
    styleUrls: ['./Alumno.component.css']
})

//este es el CONTROLADOR
export class AlumnoListaComponent {
    alumnos: any [] = [
        {nombre: 'Perico', apellidos: 'Delgado', direccion: 'Segovia', edad: 60 },
        {nombre: 'Juan', apellidos: 'Garcia', direccion: 'Madrid', edad: 30 },
        {nombre: 'Yo', apellidos: 'Mi apellido', direccion: 'mi casa', edad: 20 },
        {nombre: 'Pedro', apellidos: 'Gomez', direccion: 'Barcelona', edad: 20 }
    ];
}
//any es lo mismo que var, sive para cualquier tipo de dato