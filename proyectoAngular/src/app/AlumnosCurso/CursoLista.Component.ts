import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AlumCursoService } from "./AlumCursoService";
import { RouterModule } from "@angular/router";
import { Cusrsi } from "./ICurso";
import { CursoService } from "./CursoService";


@Component({
    selector: 'CursoLista',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: 'CursoLista.Component.html',
    styleUrls: ['./../Alumnos/Alumno.component.css'],
    providers: [CursoService]
})

export class CursoLista implements OnInit {

    seleccion: string = 'Todos'
    cursos : Cusrsi[] = [];
    constructor(public losCursos : CursoService){   

    }

    ngOnInit(): void {
        this.losCursos.getCursos().subscribe((datosCursos) => this.cursos = datosCursos);
    }
    getNumTodos(): number{
        return this.cursos.length;
    }
}