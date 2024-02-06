import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './Alumnos/Alumno.component';
import { EstudianteListaComponent } from './ListaEstudiantes/EstudianteLista.component';
import { ImagenVisibleComponent } from './ComponentesSimples/ImagenVisible.component';
import { BotonesComponent } from './ComponentesSimples/Botones.component';
import { revueltoComponent } from './ComponentesSimples/Revuelto.component';
import { pruebasComponent } from './ComponentesSimples/ComponentePruebas.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoListaComponent } from './ListaAlLocal/AlumnoLista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoComponent, ImagenVisibleComponent, 
            BotonesComponent, revueltoComponent, pruebasComponent, EstudianteListaComponent,
            HttpClientModule, AlumnoListaComponent],
  template: `

            <lista-alumnos-local></lista-alumnos-local>
            <!--
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