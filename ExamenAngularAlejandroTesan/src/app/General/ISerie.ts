export interface ISerie{
    id: number;
    nomSerie: string;
    marcaId: number;
}

export class SerieClass implements ISerie{
    constructor(
        public id: number,
        public nomSerie: string,
        public marcaId: number,){}
}