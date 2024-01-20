import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'contadorHijo',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './Contador.html',
    styleUrls: ['Contador.css']
})

export class contadorHijo  {
    @Input()
    todos:  number =0;

    @Input()
    hombres: number =0;

    @Input()
    mujeres: number =0;

}

//el hijo leera lo q hay dentro del padre