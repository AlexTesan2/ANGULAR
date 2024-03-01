export interface IVehi{
    id: number;
    matricula: string;
    color: string;
    serieId: number;
}

export class VehiculoClass implements IVehi{
    constructor(
        public id: number,
        public matricula: string,
        public color: string,
        public serieId: number,){}
}