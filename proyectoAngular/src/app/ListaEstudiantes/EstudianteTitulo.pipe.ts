import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'estudianteTitulo',
    standalone: true
})

export class EstudianteTituloPipe implements PipeTransform{
    transform(value: any, sexo: string): string {
        if (sexo == 'Hombre') {
            return 'Sr. ' + value;
        } else {
            return 'Sra. ' + value;
        }
    }
}