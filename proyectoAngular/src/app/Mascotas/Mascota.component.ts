import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mascotaS } from './IMascota';
import { MascotaService } from './MascotaService';

@Component({
    selector: 'mascotas',
    standalone: true,
    imports: [CommonModule],
    template: `
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Animal</th>
                    </tr>
                </thead>
                <tbody>
                    <ng-container *ngFor="let mas of mascotas">
                        <tr>
                            <td>{{mas.Id}}</td>
                            <td>{{mas.Name}}</td>
                            <td>{{mas.Animal}}</td>
                        </tr>
                    </ng-container>
                </tbody>
            </table>
            `,
    providers: [MascotaService]
})

export class mascotas {
    mascotas: mascotaS[] = []; 
    constructor(public lasMasc: MascotaService) {}
    ngOnInit(): void {
        this.lasMasc.getPMaascotas().subscribe((datosMasc) => this.mascotas = datosMasc);
    }
}
