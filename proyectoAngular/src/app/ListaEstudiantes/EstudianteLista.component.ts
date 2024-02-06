import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EstudianteTituloPipe } from "./EstudianteTitulo.pipe";
import { contadorHijo } from "./Contador.component";
import { IEstudiante, Alumno } from "./IEstudiante";
import { EstudiantesService } from "./EstudiantesService";

//OnInit se ejecuta al iniciar
//esta es la VISTA
@Component({
    selector: 'lista-estudiantes',
    standalone: true,
    imports: [CommonModule, EstudianteTituloPipe,contadorHijo,],
    templateUrl: 'EstudianteLista.component.html',
    styleUrls: ['./../Alumnos/Alumno.component.css'],
    providers: [EstudiantesService]
})

//este es el CONTROLADOR
export class EstudianteListaComponent implements OnInit {

    seleccion: string = 'Todos'
    //estudiantes : IEstudiante[];
    estudiantes : Alumno[] = [];

    //constructor(){
        //estudiantes: any [] = [
        //estudiantes: IEstudiante [] = [
        //ya no sacaremos los datos de aqui, los sacaremos del service
        /*this.estudiantes = [
            {nombre: 'Perico', apellidos: 'Delgado', direccion: 'Segovia', fnac: '2/28/1958', sexo: 'Hombre', nom_padre: 'Pepe' },
            {nombre: 'Juana', apellidos: 'Garcia', direccion: 'Madrid', fnac: '10/22/1988', sexo: 'Mujer' },
            {nombre: 'Yo', apellidos: 'Mi apellido', direccion: 'mi casa', fnac: '4/30/1947' ,sexo: 'Hombre'},
            {nombre: 'Laura', apellidos: 'Gomez', direccion: 'Barcelona', fnac: '12/1/1945' , sexo: 'Mujer'}
        ];*/
    //}

    //version 2
    constructor(public losAlumnos : EstudiantesService){   

    }

    ngOnInit(): void {
        this.losAlumnos.getAlumnos().subscribe((datosAlumnos) => this.estudiantes = datosAlumnos);
    }
    //solo hay q hacwer 2 cosas: leer desde el service, y leer esa funcion a traces de un objeto, el suscribe extrae la info

    //version local
    /*constructor(public losAlumnos : EstudiantesService){   //inyectamos el servicio por inyeccion de dependencias
        //this.estudiantes = losAlumnos.getAlumnos(); //lo podemos dejar en blanco y hacerlo en el onInit
    }

    ngOnInit(): void {          //dar valores iniciales a los alumnos, lo mismo q el contructor
        this.estudiantes = this.losAlumnos.getAlumnos();
    }*/

    //en la api me tienen q dar permisos, el service por a funcion get lee la api , te mete lo leido en un objeto observable, y se lee el observable con la funcion subscribe 
    alCambiar(opcionSeleccionada: string): void{
        this.seleccion = opcionSeleccionada;
    }

    getNumTodos(): number{
        return this.estudiantes.length;
    }

    getNumHombres(): number{
        return this.estudiantes.filter(a => a.sexo === "Hombre" ).length;
    }
    
    getNumMujeres(): number{
        return this.estudiantes.filter(a => a.sexo === "Mujer" ).length;
    }
}
//any es lo mismo que var, sive para cualquier tipo de dato
//en angular no se hacen accesos a bases de datos a traves de SQL, 
//se mostraran unos datos y otros no a traves de directivas
//las directivas empiezan por *ng  (*ngIf, *ngClass, *ngFor)
// = asignación, == comparación, === comparacion q compara el contenido, tipo de  dato y su clase