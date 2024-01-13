import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './Alumnos/Alumno.component';
import { ImagenVisibleComponent } from './ImagenVisible/ImagenVisible.component';
import { BotonesComponent } from './BotonesVarios/Botones.component';
import { revueltoComponent } from './Revuelto/Revuelto.component';
import { pruebasComponent } from './ComponenteDepruebas/ComponentePruebas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoComponent, ImagenVisibleComponent, 
            BotonesComponent, revueltoComponent, pruebasComponent],
  template: `
            <pruebas></pruebas>
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