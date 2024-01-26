import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';       //imprescindible para usar el ngModel

@Component({
    selector: 'contadorHijo',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule],
    templateUrl: './Contador.html',
    styleUrls: ['Contador.css']
})

export class contadorHijo  {

    opcionElegida: string = "Todos"  //el valor es igual q el value de contador html/ sera la opcion por defecto

    @Output()
    globalElegido: EventEmitter<string> = new EventEmitter<string>()  //sirve para pasar los datos

    @Input()
    todos:  number =0;

    @Input()
    hombres: number =0;

    @Input()
    mujeres: number =0;

    cuandoCambiemos(){
        this.globalElegido.emit(this.opcionElegida);  //cargaremos el valor de opcionElegida en globalElegido
    }

}

//el hijo leera lo q hay dentro del padre