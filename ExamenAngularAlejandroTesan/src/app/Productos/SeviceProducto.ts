import { Injectable, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { product } from "./IProducto";

//ahora sacaremos los datos del server, simulando ser una API

@Injectable()
export class ServiceProducto{
    constructor(private _http: HttpClient){

    }
    getProductos(): Observable<product[]>{
        return this._http.get<product[]>("https://localhost:44338/api/producto/Get");
    }
    getProductoPorId(id: number): Observable<product>{
        return this._http.get<product>("https://localhost:44338/api/producto/Get/" + id);
    }
}