import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { listaProductos } from './Productos/producto.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { unicoProducto } from './UnicoProducto/unicoProducto.component';
import { VehiculosDesplegadosLista } from './DesplegableSeries/vehiculosDeLaSerie.component';
import { ListaEnlacesSerie } from './listaEnlaces/ListaEnlacesSerie.component';
import { losVehiculosPostEnlace } from './listaEnlaces/VehiculosDelEnlace.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, listaProductos, HttpClientModule,
            RouterModule, unicoProducto, VehiculosDesplegadosLista, ListaEnlacesSerie] ,
  template: `
            <br>    
            <h3 style="text-align: center;">Examen de Angular de Alex Tesan</h3>
            <br><br>
            <div style="padding: 10px;">
              <ul class="nav nav-tabs justify-content-left">
                <li class="nav-item">
                  <a class="nav-link" href="productos" aria-current="page">productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Desplegable" aria-current="page">Desplegable</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="enlaces" aria-current="page">enlaces</a>
                </li>
              </ul>
              <router-outlet></router-outlet>
            </div>
            `,
})

export class AppComponent {

}