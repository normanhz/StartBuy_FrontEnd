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
