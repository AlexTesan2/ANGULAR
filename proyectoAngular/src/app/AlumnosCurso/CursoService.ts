import { Injectable, NgModule } from "@angular/core";
import { AlumnoC } from "./IAlumCuso";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cusrsi } from "./ICurso";

//ahora sacaremos los datos del server, simulando ser una API

@Injectable()
export class CursoService{
    constructor(private _http: HttpClient){

    }
    getCursos(): Observable<Cusrsi[]>{
        return this._http.get<Cusrsi[]>("https://localhost:44302/api/curso/Get");
    }

    getCursosPorId(id: number): Observable<Cusrsi>{
        return this._http.get<Cusrsi>("https://localhost:44302/api/curso/Get2/"+id);
    }
}
//se conecta al servidor (MySqlServer), y le pide los datos (a traves del localhost), y los devuelve como observable