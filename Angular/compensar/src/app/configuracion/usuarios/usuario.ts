
export class Usuario{
    usuarioId: number;
    nombres: string;
    apellidos: string;
    identificacion: BigInteger;
    tipoIdentificacion: BigInteger;
    telefono: BigInteger;
    direccion: string;
    email: string;
    tipoUsuario: number;
    username: string;
    password: string;
    habilitado: boolean;
    roles: string[]=[];
}