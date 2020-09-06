export interface IUsuarioPersona {
    usuarioPersonaId: number,
    usuario: string,
    nombres: string,
    apellidos: string,
    email: string,
    generoId: number,
    paisId: number,
    password: string,
    codigoVerificacion: number,
    departamentoId: number
    ciudadId : number,
    direccionCompleta: string,
    telefono: number,
    cuentaVerificada: boolean,
    fechaIngreso: string,
    fechaModifico: string

}

export interface IGender{
    generoId: number,
    genero: string
};

export interface IUsuario {
    usuarioId: number,
    usuario: string,
    nombres: string,
    email: string,
    password: string,
    isAdmin: boolean
}

