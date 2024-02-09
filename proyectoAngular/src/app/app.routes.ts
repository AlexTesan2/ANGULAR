import { Routes } from '@angular/router';
import { LitaAlumnosServer } from './ListaAlServer/AlumLista.component';
import { AlumnoListaComponent } from './ListaAlLocal/AlumnoLista.component';
import { PagianNoencontradaComponent } from './Otros/PaginaNoEncontrada';
import { profesorComponent } from './Profesores/Profesor.component';

export const routes: Routes = [
    {path: 'Alumnos', component: AlumnoListaComponent},
    {path: 'Alumnos2', component: LitaAlumnosServer},
    {path: 'Profesores', component: profesorComponent},
    {path: '', redirectTo: '/Profesores', pathMatch: 'full'},
    {path: '**', component: PagianNoencontradaComponent }
];
