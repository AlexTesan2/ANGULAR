import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IAlumCuso, AlumnoC } from "./IAlumCuso";
import { AlumCursoService } from "./AlumCursoService";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'AlumnosCursoLista',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: 'AlumnosCursoLista.Component.html',
    styleUrls: ['./../Alumnos/Alumno.component.css'],
    providers: [AlumCursoService]
})

export class AlumnosCursoLista implements OnInit {

    seleccion: string = 'Todos'
    alumnos : AlumnoC[] = [];
    constructor(public losAlumnos : AlumCursoService){   

    }

    ngOnInit(): void {
        this.losAlumnos.getAlumnos().subscribe((datosAlumnos) => this.alumnos = datosAlumnos);
    }
    //solo hay q hacer 2 cosas: leer desde el service, y leer esa funcion a traves de un objeto, el suscribe extrae la info ?
    //en la api me tienen q dar permisos, el service por a funcion get lee la api , te mete lo leido en un objeto observable, y se lee el observable con la funcion subscribe 
    
    
    alCambiar(opcionSeleccionada: string): void{
        this.seleccion = opcionSeleccionada;
    }

    getNumTodos(): number{
        return this.alumnos.length;
    }

    getNumHombres(): number {
        return this.alumnos.filter(a => a.sexo === "Hombre").length;
    }
    
    getNumMujeres(): number{
        return this.alumnos.filter(a => a.sexo == "Mujer" ).length;
    }

    //.trim pq me equivoque el el server y el campo sexo es nchar en lugar de nvarchar
}