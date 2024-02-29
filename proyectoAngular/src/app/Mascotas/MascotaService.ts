import { Injectable, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { mascotaS } from "./IMascota";


//ahora sacaremos los datos del server, simulando ser una API

@Injectable()
export class MascotaService{
    constructor(private _http: HttpClient){

    }
    getPMaascotas(): Observable<mascotaS[]>{
        return this._http.get<mascotaS[]>("https://localhost:44302/api/mascota/Get");
    }
}