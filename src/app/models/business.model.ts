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
