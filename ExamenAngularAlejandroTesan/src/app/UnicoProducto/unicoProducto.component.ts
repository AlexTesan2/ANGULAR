import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { product } from "../Productos/IProducto";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";
import { ServiceProducto } from "../Productos/SeviceProducto";

@Component({
    selector: 'app-unicoProducto',
    standalone: true,
    imports: [CommonModule, RouterModule, RouterOutlet],
    templateUrl: 'unicoProducto.component.html',
    providers: [ServiceProducto], 
    styleUrls: ['./../Otros/estilosTabla.css']
})

export class unicoProducto implements OnInit {
    producto : product = {} as product;
    constructor(public SProd : ServiceProducto, private activatedRoute: ActivatedRoute){ 
    }

    ngOnInit(): void {
        let idParam = this.activatedRoute.snapshot.paramMap.get('id');
        if (idParam) {
            let id: number = +idParam;
            this.SProd.getProductoPorId(id).subscribe(
                (datosProdcuto) => {
                    this.producto = datosProdcuto;
                    console.log(this.producto);
                },
                (error) => {
                    console.error('Error fetching product:', error);
                }
            );
        } else {
            console.error('id parameter is missing');
        }
        //this.SProd.getProductoPorId(id).subscribe((datosProdcuto) => this.producto=datosProdcuto);
    }
}