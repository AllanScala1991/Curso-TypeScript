interface IUser {
    nome: string;
    idade: number;
    cidade?: string // PROPRIEDADE OPCIONAL
}


const setUSer: IUser = { // NÃO FOI PASSADO A CIDADE POIS É UM PARAMETRO OPCIONAL
    nome: "Allan",
    idade: 10
}