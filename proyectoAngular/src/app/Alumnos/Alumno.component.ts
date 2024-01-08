import { Component } from "@angular/core";

@Component({
    selector: 'el-alumno',
    standalone: true,
    templateUrl: './Alumno.component.html',
})
//en el @Component se crea el componente
//el selector es el nombre del componente
//template es el contenido del componente
//puede ser template:`<div>codigo</div>`  o templateUrl: './direccion'


export class AlumnoComponent {
    nombre: string="Perico";
    apellidos: string="Delgado";
    direccion: string="Segovia";
    edad: number=60;
}
//en la clase hay atributos y metodos con los que trabajaremos en el componenente
//se crean y asignan la asvaraibles