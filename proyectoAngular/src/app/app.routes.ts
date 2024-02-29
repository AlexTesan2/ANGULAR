import { Routes } from '@angular/router';
import { LitaAlumnosServer } from './ListaAlServer/AlumLista.component';
import { AlumnoListaComponent } from './ListaAlLocal/AlumnoLista.component';
import { PagianNoencontradaComponent } from './Otros/PaginaNoEncontrada';
import { profesorComponent } from './Profesores/Profesor.component';
import { AlumnoComponent } from './Alumnos/Alumno.component';
import { mascotas } from './Mascotas/Mascota.component';
import { alumnoDeCurso } from './AlumnosCurso/AlumnosDeCurso';


export const routes: Routes = [
    {path: 'Alumnos', component: AlumnoListaComponent},
    {path: 'Alumnos2', component: LitaAlumnosServer},
    {path: 'Alumnos3/:id', component: AlumnoComponent},
    {path: 'Profesores', component: profesorComponent},
    {path: 'AlumnoDeCurso/:id', component: alumnoDeCurso},
    {path: 'Mascotas', component: mascotas},
    {path: '', redirectTo: '/Profesores', pathMatch: 'full'},
    {path: '**', component: PagianNoencontradaComponent }
];
//Si no se especifica nada en la url, muestra profesores,
//Y si lo especificado en la url no coincide con ninguna ruta, muestra PaginaNoEncontradaComponent
//El primer nombre es el que se pondra em el menu de app.component.ts, y el segundo es el nombre del componenete original 
