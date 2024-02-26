import { Injectable, NgModule } from "@angular/core";
import { AlumnoC } from "./IAlumCuso";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

//ahora sacaremos los datos del server, simulando ser una API

@Injectable()
export class AlumCursoService{
    constructor(private _http: HttpClient){

    }
    getAlumnos(): Observable<AlumnoC[]>{
        return this._http.get<AlumnoC[]>("https://localhost:44302/api/alumno");
    }

    getAlumnosPorId(id: number): Observable<AlumnoC>{
        return this._http.get<AlumnoC>("https://localhost:44302/api/alumno/"+id);
    }
}
//se conecta al servidor (MySqlServer), y le pide los datos (a traves del localhost), y los devuelve como observable