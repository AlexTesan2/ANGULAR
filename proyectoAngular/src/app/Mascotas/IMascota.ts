export interface masc{
    Id: number;
    Name: string;
    Animal: string;
    IdDueño: number;
}

export class mascotaS implements masc{
    constructor(public Id: number,public Name: string, public Animal: string, public IdDueño: number){
                    
    }
}