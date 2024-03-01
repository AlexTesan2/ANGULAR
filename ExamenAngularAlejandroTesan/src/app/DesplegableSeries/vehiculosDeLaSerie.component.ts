import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { Service } from "../General/Service";
import { VehiculoClass } from "../General/IVehiculo";
import { SeriesDesplegable } from "./desplegableSeries.component";

@Component({
    selector: 'VehiculosDesplegadosLista',
    standalone: true,
    imports: [CommonModule, RouterModule,SeriesDesplegable],
    templateUrl: 'vehiculosDeLaSerie.component.html',
    styleUrls: ['../Otros/estilosTabla.css'],
    providers: [Service]
})

export class VehiculosDesplegadosLista implements OnInit {

    seleccion: number = 800
    vehiculos : VehiculoClass[] = [];
    constructor(public miService : Service){   

    }

    ngOnInit(): void {
        this.miService.getVehiculos().subscribe((datosVehiculos) => this.vehiculos = datosVehiculos);
    }

    cargarSerie(numSerie: number){
        this.seleccion = numSerie
    }
}