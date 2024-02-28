import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AlumnoTituloPipe } from "./AlumnoTitulo.pipe";
import { contadorHijo } from "./Contador.component";
import { IAlumno, Alumno } from "./IAlumno";
import { AlumnosService } from "./AlumnoService";


//En este ejercicio no sacamos los datos de esta pagina, los sacaremos del service
@Component({
    selector: 'lista-alumnos-local-2',
    standalone: true,
    imports: [CommonModule, AlumnoTituloPipe,contadorHijo,],
    templateUrl: 'AlumnoLista.component.html',
    styleUrls: ['./../Alumnos/Alumno.component.css'],
    providers: [AlumnosService]
})

export class AlumnoListaComponent2 implements OnInit  {

    seleccion: string = 'Todos'
    alumnos : Alumno[] = [];

    constructor(public losAlumnos : AlumnosService){   //inyectamos el servicio por inyeccion de dependencias
        //this.alumnos = losAlumnos.getAlumnos();       //lo podemos dejar en blanco y hacerlo en el onInit
    }

    ngOnInit(): void {                                   //OnInit se ejecuta al iniciar
        this.alumnos = this.losAlumnos.getAlumnos();    //dar valores a alumnos, con un metodo del service
    }

    alCambiar(opcionSeleccionada: string): void{
        this.seleccion = opcionSeleccionada;
    }

    getNumTodos(): number{
        return this.alumnos.length;
    }

    getNumHombres(): number{
        return this.alumnos.filter(a => a.sexo === "Hombre" ).length;
    }
    
    getNumMujeres(): number{
        return this.alumnos.filter(a => a.sexo === "Mujer" ).length;
    }
}