import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'el-alumno',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './Alumno.component.html',
    styleUrls: ['./Alumno.component.css']
})
//en el @Component se crea la vista del componente
//el selector es el nombre del componente
//template es el contenido del componente
//puede ser template:`<div>codigo</div>`  o templateUrl: './direccion'


export class AlumnoComponent {
    columnas: number = 2;
    nombre: string="Perico";
    apellidos: string="Delgado";
    direccion: string="Segovia";
    edad: number=60;
    visibles: boolean = false;
    
    alternarVisibles(): void {
        this.visibles = !this.visibles;
    }
}
//en la clase hay atributos y metodos con los que trabajaremos en el componenente