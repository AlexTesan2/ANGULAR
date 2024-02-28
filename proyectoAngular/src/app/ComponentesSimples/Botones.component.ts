import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'botones',
    standalone: true,
    imports: [CommonModule],
    template: `
                <button class="color">boton1</button>
                <button class="{{aplicarClase}}">boton2</button>
                <button [class]="aplicarClase">boton3</button>
                <br><br>
                <button class="color italica negrita" [class.negrita]='false'>boton4</button>
                <button class="color italica negrita" [class.negrita]='aplicar_negrita'>boton5</button>
                <button class="color italica negrita" [class.negrita]='!aplicar_negrita'>boton6</button>
                <br><br>
                <button [ngClass]='addClases()'>boton7</button>
            `,
})
//los botones, si no se especifica la ruta cojen por defecto los estilos de styles.css
// el 2 y 3 son formas sintacticamente diferentes de hacer lo mismo
//en el 4, 5 y 6 aplicamos booleanos sobre los estilos
// el 7 llama a un metodo q aplica booleanos sobre los estilos

export class BotonesComponent {
    aplicarClase: string = "italica negrita";
    aplicar_negrita: boolean =true;
    aplicar_color : boolean=true;

    addClases(){
        let clases={
            negrita: this.aplicar_negrita,
            color: this.aplicar_color,
        }
        return clases;
    }
}
