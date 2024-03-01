import { Routes } from '@angular/router';
import { PagianNoencontradaComponent } from './Otros/PaginaNoEncontrada';
import { unicoProducto } from './UnicoProducto/unicoProducto.component';
import { listaProductos } from './Productos/producto.component';
import { ListaEnlacesSerie } from './listaEnlaces/ListaEnlacesSerie.component';
import { losVehiculosPostEnlace } from './listaEnlaces/VehiculosDelEnlace.component';
import { SeriesDesplegable } from './DesplegableSeries/desplegableSeries.component';
import { VehiculosDesplegadosLista } from './DesplegableSeries/vehiculosDeLaSerie.component';


export const routes: Routes = [
    {path: 'productos', component: listaProductos},
    {path: 'Desplegable', component: VehiculosDesplegadosLista},
    {path: 'enlaces', component: ListaEnlacesSerie},
    {path: 'postEnlace', component: losVehiculosPostEnlace},
    {path: 'unicoProducto/:id', component: unicoProducto},
    {path: 'postEnlace/:id', component: losVehiculosPostEnlace},
    {path: '', component: VehiculosDesplegadosLista},
    {path: '**', component: PagianNoencontradaComponent }
];
