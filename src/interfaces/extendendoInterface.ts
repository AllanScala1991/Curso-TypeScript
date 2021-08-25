interface IUsers {
    nome: string,
    idade: number
}

interface IPessoas extends IUser { // USA OS CAMPOS DO IUSERS E OS PROPRIOS PARAMETROS.
    cidade: string;
}