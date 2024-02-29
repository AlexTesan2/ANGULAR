import { Injectable, NgModule } from "@angular/core";
import { Alumno } from "./IAlum";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

//ahora sacaremos los datos del server, simulando ser una API

@Injectable()
export class AlumService{
    constructor(private _http: HttpClient){

    }
    getAlumnos(): Observable<Alumno[]>{
        return this._http.get<Alumno[]>("https://localhost:44302/api/alumno/Get");
    }

    getAlumnosPorId(id: number): Observable<Alumno>{
        return this._http.get<Alumno>("https://localhost:44302/api/alumno/Get/"+id);
    }
}
//se conecta al servidor (MySqlServer), y le pide los datos (a traves del localhost), y los devuelve como observable
//("https://localhost:44302/api/alumno/Get2/"+id);