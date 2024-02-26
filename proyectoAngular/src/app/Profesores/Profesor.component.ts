import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { listaProfes } from './ProfeLista.component';

@Component({
    selector: 'profesorComponent',
    standalone: true,
    imports: [CommonModule, listaProfes,],
    template: `
                <lista-profes></lista-profes>
            `,
})

export class profesorComponent {
    
}