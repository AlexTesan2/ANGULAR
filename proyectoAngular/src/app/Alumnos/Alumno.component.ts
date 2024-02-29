import { Component, OnInit} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { Alumno } from "../ListaAlLocal/IAlumno";
import { AlumService } from "../ListaAlServer/AlumService";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'el-alumno',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './Alumno.component.html',
    styleUrls: ['./Alumno.component.css']
})
export class AlumnoComponent implements OnInit{
    alumno!: Alumno;

    constructor(private alumnoService: AlumService, private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        let idAlumno: number= this.activatedRoute.snapshot.params['id'];
        this.alumnoService.getAlumnosPorId(idAlumno).subscribe((datosAlumno) => this.alumno = datosAlumno);
    }
}

/*export class AlumnoComponent {
    columnas: number = 2;
    nombre: string="Perico";
    apellidos: string="Delgado";
    direccion: string="Segovia";
    edad: number=60;
    visibles: boolean = false;
    
    alternarVisibles(): void {
        this.visibles = !this.visibles;
    }
}*/

