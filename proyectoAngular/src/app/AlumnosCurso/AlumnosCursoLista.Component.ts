import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IAlumCuso, AlumnoC } from "./IAlumCuso";
import { AlumCursoService } from "./AlumCursoService";
import { RouterModule } from "@angular/router";
import { CursoLista } from "./CursoLista.Component";

@Component({
    selector: 'AlumnosCursoLista',
    standalone: true,
    imports: [CommonModule, RouterModule, CursoLista],
    templateUrl: 'AlumnosCursoLista.Component.html',
    styleUrls: ['./../Alumnos/Alumno.component.css'],
    providers: [AlumCursoService]
})

export class AlumnosCursoLista implements OnInit {

    seleccion: number = 800
    alumnos : AlumnoC[] = [];
    constructor(public losAlumnos : AlumCursoService){   

    }

    ngOnInit(): void {
        this.losAlumnos.getAlumnos().subscribe((datosAlumnos) => this.alumnos = datosAlumnos);
    }

    cargarCurso(numCurso: number){
        this.seleccion = numCurso
    }
}