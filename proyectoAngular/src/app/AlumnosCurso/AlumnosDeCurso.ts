import { Component, OnInit} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { IAlumCuso } from "./IAlumCuso";
import { AlumnoC } from "./IAlumCuso";
import { AlumCursoService } from "./AlumCursoService";

@Component({
    selector: 'alumnoDeCurso',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'AlumnosDeCurso.html',
    //styleUrls: ['./Alumno.component.css']
    providers: [AlumCursoService]
})
export class alumnoDeCurso implements OnInit{
    alumnos: AlumnoC[] = [];

    constructor(private alumnoService: AlumCursoService, private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        let idCurso: number= this.activatedRoute.snapshot.params['id'];
        this.alumnoService.getAlumnosPorCurso(idCurso).subscribe((datosAlumno) => this.alumnos = datosAlumno);
    }
}