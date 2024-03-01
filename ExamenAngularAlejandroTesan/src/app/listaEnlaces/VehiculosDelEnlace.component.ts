import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";
import { Service } from "../General/Service";
import { VehiculoClass } from "../General/IVehiculo";

@Component({
    selector: 'losVehiculosPostEnlace',
    standalone: true,
    imports: [CommonModule, RouterModule, RouterOutlet],
    templateUrl: 'VehiculosDelEnlace.component.html',
    providers: [Service], 
    styleUrls: ['./../Otros/estilosTabla.css']
})

export class losVehiculosPostEnlace implements OnInit {
    vehiculos : VehiculoClass []= {} as VehiculoClass[];
    constructor(public miService : Service, private activatedRoute: ActivatedRoute){ }

    ngOnInit(): void {
        let idParam = this.activatedRoute.snapshot.paramMap.get('id');
        if (idParam) {
            let id: number = +idParam;
            this.miService.getVehiculosPorSerie(id).subscribe(
                (datos) => {
                    this.vehiculos = datos;
                    console.log(this.vehiculos);
                },
                (error) => {
                    console.error('Error fetching product:', error);
                }
            );
        } else {
            console.error('id parameter is missing');
        }
    }
}