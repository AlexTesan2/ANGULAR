import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Profe } from "./IProfe";
import { ProfeService } from "./ProfeService";

@Component({
    selector: 'lista-profes',
    standalone: true,
    imports: [CommonModule,],
    templateUrl: 'ProfeLista.component.html',
    styleUrls: ['./../Alumnos/Alumno.component.css'],
    providers: [ProfeService]
})

export class listaProfes implements OnInit {

    seleccion: string = 'Todos'
    prfesores : Profe[] = [];
    constructor(public losPr : ProfeService){   

    }

    ngOnInit(): void {
        this.losPr.getProfes().subscribe((datosProfes) => this.prfesores = datosProfes);
    }
    //datosProfes lo estoy creando y cargando ahora
    //solo hay q hacer 2 cosas: leer desde el service, y leer esa funcion a traves de un objeto, el suscribe extrae la info ?
    //en la api me tienen q dar permisos, el service por a funcion get lee la api , te mete lo leido en un objeto observable, y se lee el observable con la funcion subscribe 
    
    
    alCambiar(opcionSeleccionada: string): void{
        this.seleccion = opcionSeleccionada;
    }

    getNumTodos(): number{
        return this.prfesores.length;
    }
}