import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { CommonModule } from '@angular/common';
import { AlumCursoService } from "./AlumCursoService";
import { RouterModule } from "@angular/router";
import { Cusrsi } from "./ICurso";
import { CursoService } from "./CursoService";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'CursoEnlace',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: 'CursoEnlaceComponent.html',
    styleUrls: ['./../Alumnos/Alumno.component.css'],
    providers: [CursoService]
})

export class CursoEnlace  {

    cursos : Cusrsi[] = [];
    constructor(private router: Router, private cursoService: CursoService) {
        this.cursoService.getCursos().subscribe((datosCursos) => this.cursos = datosCursos);
    }

    mostrarAlumnos(idCurso: number) {
        this.router.navigate(['/AlumnoDeCurso', idCurso]);
    }

}