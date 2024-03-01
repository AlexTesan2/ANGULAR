import { Routes } from '@angular/router';
import { PagianNoencontradaComponent } from './Otros/PaginaNoEncontrada';
import { unicoProducto } from './UnicoProducto/unicoProducto.component';
import { listaProductos } from './Productos/producto.component';


export const routes: Routes = [
    {path: '', component: listaProductos},
    {path: 'unicoProducto/:id', component: unicoProducto},
    {path: '**', component: PagianNoencontradaComponent }
];
