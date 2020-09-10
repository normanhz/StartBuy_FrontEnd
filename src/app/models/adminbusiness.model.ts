export interface IProductosVendidos{
    empresaId: number,
    empresa: string,
    producto_Image: string,
    producto: string;
    precio: number,
    cantidad: number,
    total_Neto: number,
    fecha: Date
};


export interface INotices
{
    noticiaID: number,
    empresaId: number,
    descripcion: string
}

export interface IProductosChange{
    productoId: number,
    producto: string,
    descripcion: string,
    productoImage: string,
    empresaId: number,
    categoriaProductoId: number,
    precio: number,
    cantidadEnStock: number,
    estado: boolean
}
