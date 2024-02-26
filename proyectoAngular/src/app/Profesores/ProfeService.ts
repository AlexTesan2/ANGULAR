import { Injectable, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Profe } from "./IProfe";

//ahora sacaremos los datos del server, simulando ser una API

@Injectable()
export class ProfeService{
    constructor(private _http: HttpClient){

    }
    getProfes(): Observable<Profe[]>{
        return this._http.get<Profe[]>("https://localhost:44302/api/profesor");
    }
}
//se conecta al servidor (MySqlServer), y le pide los datos (a traves del localhost), y los devuelve como observable