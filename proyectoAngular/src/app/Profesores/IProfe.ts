export interface IProfe{
    id: number;
    Nombre: string;
}

export class Profe implements IProfe{
    constructor(public id: number,public Nombre: string){
                    
    }
}

//los nombres de los datos deben coincidir exactamente con la base de datos 
//peligro mayusculas