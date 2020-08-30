export interface IProductosVendidos{
    ventaProductoId: number,
    productoId: number,
    products: IProductos;
    precio: number,
    cantidad: number,
    total: number,
    totalCompra: number
};

export interface IProductos
{
    producto: string,
    descripcion: string,
    productoImage: string
}

