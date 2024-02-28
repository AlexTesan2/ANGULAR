import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { CommonModule } from '@angular/common';
import { AlumCursoService } from "./AlumCursoService";
import { RouterModule } from "@angular/router";
import { Cusrsi } from "./ICurso";
import { CursoService } from "./CursoService";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'CursoLista',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: 'CursoLista.Component.html',
    styleUrls: ['./../Alumnos/Alumno.component.css'],
    providers: [CursoService]
})

export class CursoLista  {

    seleccion: any
    cursos : Cusrsi[] = [];
    constructor(public losCursos : CursoService){   
        this.losCursos.getCursos().subscribe((datosCursos) => this.cursos = datosCursos);
    }

    @Output()
    CursoSeleccionado: EventEmitter<number> = new EventEmitter<number>()

    alSeleccionar(event: any): void {
        this.CursoSeleccionado.emit(this.seleccion.id); 
    }
}