import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from '../Alumnos/Alumno.component';

@Component({
    selector: 'revuelto',
    standalone: true,
    imports: [CommonModule, AlumnoComponent],
    template: `
                <div> 
                    <h1>{{encabezado}}</h1>

                    <h5>{{getNombreCompleto()}}</h5>
                    <h3>{{(encabezado == '')?getNombreCompleto() : (5+5)}}</h3>

                    <img src='{{imagen}}' style='width: 100px; height: auto;'/>
                    <img [src]='imagen' style='width: 100px; height: auto;'/>
                    <img src='https://i.ebayimg.com/images/g/FPoAAOSwI-BWMIwo/{{imagenCortada}}' style='width: 100px; height: auto;'/>
                    <br>
                    <button [disabled]=true>Boton</button>
                    <button [disabled]=false>Boton</button>
                    <button [disabled]='activado'>Boton</button>
                    <button [disabled]='desactivado'>Boton</button>
                    <br>
                    <el-alumno></el-alumno>
                </div>
            `,
    styleUrl: '../app.component.css'
})
//si encabezado esa vacio, se llama a metodo, y se mostrara el nombre completo, y sino, se mostrara 10
//un componente dentro de otro componente

export class revueltoComponent {
    encabezado : string= '';
    imagen: string = "https://i.ebayimg.com/images/g/FPoAAOSwI-BWMIwo/s-l1200.webp"
    imagenCortada: string = "s-l1200.webp"
    nombre : string ='perico'
    apellido : string ='delgado'
    desactivado : boolean =false
    activado : boolean =true

    getNombreCompleto(): string
    {
        return this.nombre + ' ' + this.apellido;
    }
}