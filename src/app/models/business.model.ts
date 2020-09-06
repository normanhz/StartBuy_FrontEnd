export interface IBusinessCategories{
    categoriaEmpresaId: number,
    categoriaEmpresa: string,
    categoriaEmpresaImage: string
};

export interface IBusiness{
    empresaId: number,
    empresa: string,
    empresaImage: string,
    direccionCompleta: string,
    nombreContacto: string,
    numeroContacto: number,
    estado: boolean,
    categoriaEmpresaId: number
};

export interface IProducts{
    productoId: number,
    producto: string,
    descripcion: string,
    productoImage: string,
    empresaId: number,
    categoriaProductoId: number,
    precio: number,
    cantidadEnStock: number
};

export interface IProductsInCart{
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

export interface IAllNotices
{
    empresaId: number,
    empresa: string,
    noticias: INoticess,
    noticiaID: number,
    descripcion: string
}

export interface INoticess
{
    noticiaID: number,
    descripcion: string
}
