// padre.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { hijo } from './Hijo';

@Component({
    selector: 'padre',
    standalone: true,
    imports: [CommonModule, hijo],
    template: `
        <hijo 
            [numFamiliaresDelHijo]="getNumeroDeMiFamilia()"
            (ColorFavoritoDelHijo)="CargarColor($event)">
        </hijo>

        <h2>Padre</h2>
        <p>El color favorito de mi hijo es: {{ Color }}</p>
    `,
})
//El componente hijo se encuentra dentro del padre

export class padre {
    MiFamilia: string[] = ["Cristina", "Victor", "Rocio", "Sasa"];
    Color: string = "";

    getNumeroDeMiFamilia(): number {
        return this.MiFamilia.length;
    }

    CargarColor(color: string) {
        this.Color = color;
    }
}
