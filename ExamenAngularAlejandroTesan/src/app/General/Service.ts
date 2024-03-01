import { Injectable, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { VehiculoClass } from "./IVehiculo";
import { SerieClass } from "./ISerie";

//ahora sacaremos los datos del server, simulando ser una API

@Injectable()
export class Service{
    constructor(private _http: HttpClient){

    }

    getSeries(): Observable<SerieClass[]>{
        return this._http.get<SerieClass[]>("https://localhost:44338/api/serie/Get");
    }

    getSeriesPorId(id: number): Observable<SerieClass>{
        return this._http.get<SerieClass>("https://localhost:44338/api/serie/Get/" + id);
    }

    getVehiculos(): Observable<VehiculoClass[]>{
        return this._http.get<VehiculoClass[]>("https://localhost:44338/api/vehiculo/Get");
    }

    getVehiculosPorId(id: number): Observable<VehiculoClass>{
        return this._http.get<VehiculoClass>("https://localhost:44338/api/vehiculo/Get/" + id);
    }

    getVehiculosPorSerie(id: number): Observable<VehiculoClass[]>{
        return this._http.get<VehiculoClass[]>("https://localhost:44338/api/vehiculo/getporserie/" + id);
    }
}