export interface ICuso{
    id: number;
    ano: number;
    letra: string;
    cicloID: number;
}

export class Cusrsi implements ICuso{
    constructor(public id: number, public ano: number, public letra: string, public cicloID: number){
                    
    }
}