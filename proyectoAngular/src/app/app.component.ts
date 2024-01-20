import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './Alumnos/Alumno.component';
import { EstudianteListaComponent } from './ListaEstudiantes/EstudianteLista.component';
import { ImagenVisibleComponent } from './ComponentesSimples/ImagenVisible.component';
import { BotonesComponent } from './ComponentesSimples/Botones.component';
import { revueltoComponent } from './ComponentesSimples/Revuelto.component';
import { pruebasComponent } from './ComponentesSimples/ComponentePruebas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoComponent, ImagenVisibleComponent, 
            BotonesComponent, revueltoComponent, pruebasComponent, EstudianteListaComponent, ],
  template: `

            <lista-estudiantes></lista-estudiantes>
            <!--
              <el-alumno></el-alumno>
              <revuelto></revuelto>
              <Ima-visible></Ima-visible>
              <botones></botones>
              <pruebas></pruebas>
            -->
            `,
})

export class AppComponent {

}