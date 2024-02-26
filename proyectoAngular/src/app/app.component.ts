import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './Alumnos/Alumno.component';
import { ImagenVisibleComponent } from './ComponentesSimples/ImagenVisible.component';
import { BotonesComponent } from './ComponentesSimples/Botones.component';
import { revueltoComponent } from './ComponentesSimples/Revuelto.component';
import { pruebasComponent } from './ComponentesSimples/ComponentePruebas.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoListaComponent } from './ListaAlLocal/AlumnoLista.component';
import { AlumnoListaComponent2 } from './ListaAlLocal/AlumnoLista.component2';
import { LitaAlumnosServer } from './ListaAlServer/AlumLista.component';
import { AlumnosCursoLista } from './AlumnosCurso/AlumnosCursoLista.Component';
import { CursoLista } from './AlumnosCurso/CursoLista.Component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoComponent, ImagenVisibleComponent, 
            BotonesComponent, revueltoComponent, pruebasComponent,
            HttpClientModule, AlumnoListaComponent, AlumnoListaComponent2, LitaAlumnosServer,
            AlumnosCursoLista, CursoLista],
  template: `

            <AlumnosCursoLista></AlumnosCursoLista>
            <CursoLista></CursoLista>
            <br><br>
            <h1>Componentes</h1>    
            <div style="padding: 10px;">
              <ul class="nav nav-tabs justify-content-left">
                <li class="nav-item">
                  <a class="nav-link" href="Alumnos" aria-current="page">Alumnos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Alumnos2" aria-current="page">AlumServer</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Profesores" aria-current="page">Profesores</a>
                </li>
              </ul>
              <router-outlet></router-outlet>
            </div>
            
            
            <!--
              <lista-alumnos-server></lista-alumnos-server>
              <lista-alumnos-local></lista-alumnos-local>
              <lista-alumnos-local-2></lista-alumnos-local-2>
              <el-alumno></el-alumno>
              <revuelto></revuelto>
              <Ima-visible></Ima-visible>
              <botones></botones>
              <pruebas></pruebas>
              <lista-estudiantes></lista-estudiantes>
            -->
            `,
})

export class AppComponent {

}