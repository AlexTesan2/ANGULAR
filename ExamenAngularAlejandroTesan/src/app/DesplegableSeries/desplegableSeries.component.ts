import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Service } from "../General/Service";
import { SerieClass } from "../General/ISerie";


@Component({
    selector: 'SeriesDesplegable',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: 'desplegableSeries.component.html',
    styleUrls: ['../Otros/estilosTabla.css'],
    providers: [Service]
})

export class SeriesDesplegable  {

    seleccion: any
    series : SerieClass[] = [];
    constructor(public miService : Service){   
        this.miService.getSeries().subscribe((datosSerie) => this.series = datosSerie);
    }

    @Output()
    SerieSeleccionada: EventEmitter<number> = new EventEmitter<number>()

    alSeleccionar(event: any): void {
        this.SerieSeleccionada.emit(this.seleccion.id); 
    }
}