export interface IProducto{
    id: number;
    nomProducto: string;
    precio: number;
    idProveedor: number;
}

export class product implements IProducto{
    constructor(
        public id: number,
        public nomProducto: string,
        public precio: number,
        public idProveedor: number){}
}