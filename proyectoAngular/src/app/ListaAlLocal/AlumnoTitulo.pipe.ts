import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'alumnoTitulo',
    standalone: true
})

export class AlumnoTituloPipe implements PipeTransform{
    transform(value: any, sexo: string): string {
        if (sexo == 'Hombre') {
            return 'Sr. ' + value;
        } else {
            return 'Sra. ' + value;
        }
    }
}