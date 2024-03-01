import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { product } from "./IProducto";
import { ServiceProducto } from "./SeviceProducto";
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'listaProductos',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: 'Producto.component.html',
    providers: [ServiceProducto], 
    styleUrls: ['../Otros/estilosTabla.css']
})

export class listaProductos implements OnInit {

    prod : product[] = [];
    constructor(public losProd : ServiceProducto,private router: Router){   

    }

    ngOnInit(): void {
        this.losProd.getProductos().subscribe((pr) => this.prod = pr);
    }

    /*pasoProd(id: number) {
        this.router.navigate(['/unicoProducto/', id]);
    }*/
}