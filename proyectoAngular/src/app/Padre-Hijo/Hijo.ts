import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'hijo',
    standalone: true,
    imports: [CommonModule],
    template: `
            <h2>Hijo</h2>
            <p>Este es numero de miembros de mi familia: {{numFamiliaresDelHijo}}</p>
            `,
})

export class hijo {

    @Input()
    numFamiliaresDelHijo: number = 0;
    //Un dato que espera recibir desde el componente padre

    @Output()
    ColorFavoritoDelHijo: EventEmitter<string> = new EventEmitter<string>()
    //Un dato que va a enviar al componente padre

    ngOnInit() {
        this.ColorFavoritoDelHijo.emit("Verde");     //le damos valor
    }
}