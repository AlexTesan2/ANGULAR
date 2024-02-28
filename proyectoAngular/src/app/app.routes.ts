import { Routes } from '@angular/router';
import { LitaAlumnosServer } from './ListaAlServer/AlumLista.component';
import { AlumnoListaComponent } from './ListaAlLocal/AlumnoLista.component';
import { PagianNoencontradaComponent } from './Otros/PaginaNoEncontrada';
import { profesorComponent } from './Profesores/Profesor.component';
import { AlumnoComponent } from './Alumnos/Alumno.component';

export const routes: Routes = [
    {path: 'Alumnos', component: AlumnoListaComponent},
    {path: 'Alumnos2', component: LitaAlumnosServer},
    {path: 'Alumnos2/:id', component: AlumnoComponent},
    {path: 'Profesores', component: profesorComponent},
    {path: '', redirectTo: '/Profesores', pathMatch: 'full'},
    {path: '**', component: PagianNoencontradaComponent }
];
//Si no se especifica nada en la url, muestra profesores,
//Y si lo especificado en la url no coincide con ninguna ruta, muestra PaginaNoEncontradaComponent
