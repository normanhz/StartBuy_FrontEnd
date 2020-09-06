export interface IUsuariosAsociados {
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
    empresaId: number,
    confirmadoPorGerencia: boolean

}

export interface IGender{
    generoId: number,
    genero: string
};
