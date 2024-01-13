import { Component } from "@angular/core";

@Component({
    selector: 'el-alumno',
    standalone: true,
    templateUrl: './Alumno.component.html',
    styleUrls: ['./Alumno.component.css']
})
//en el @Component se crea el componente
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
//se crean y asignan la asvaraibles