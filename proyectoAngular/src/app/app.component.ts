import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './Alumnos/Alumno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlumnoComponent],
  template: `
            <div> 
              <h1>{{encabezado}}</h1>
              <el-alumno></el-alumno>
            </div>
            `,
  styleUrl: './app.component.css'
})
// este componente tiene dentro otro componente

export class AppComponent {
  encabezado = 'Datos alumno';
}

