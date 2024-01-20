import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from '../Alumnos/Alumno.component';

@Component({
    selector: 'Ima-visible',
    standalone: true,
    imports: [CommonModule, AlumnoComponent],
    template: `
            <img src='../../assets/dino.jpeg' width=400 *ngIf='visible'>
            <button (click)="onClick()">BotonFoto</button>
            `,
})
//ngIf directiva que trata sobre la visibilidad de un objeto
//evento al hacer click en el boton:  button (click)

export class ImagenVisibleComponent {
    visible: boolean=true;
    onClick(): void{
        this.visible=!this.visible;
    }
}