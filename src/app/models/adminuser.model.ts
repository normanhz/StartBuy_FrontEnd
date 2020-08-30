export interface IAdminUser {
    usuarioAsociadoId: number,
    usuario: string,
    nombres: string,
    apellidos: string,
    email: string,
    generoId: number,
    paisId: number,
    password: string,
    departamentoId: number
    ciudadId : number,
    direccionCompleta: string,
    telefono: number,
    nombreEmpresa: string,
    empresaId: number

}

export interface IGender{
    generoId: number,
    genero: string
};
