import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { listaProductos } from './Productos/producto.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { unicoProducto } from './UnicoProducto/unicoProducto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, listaProductos, HttpClientModule,RouterModule, unicoProducto] ,
  template: `
            
            <router-outlet></router-outlet>
            `,
})

export class AppComponent {

}