class Usuario {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

class Pessoas extends Usuario{ // A CLASSE PESSOA HERDA OS METODOS E PARAMETROS DA CLASSE USUARIO
    nome: string;
    nascimento: Date;

    constructor(username: string, password: string, nome: string, nascimento: Date) {
        super(username, password); // SERVE PARA INICIAR O CONSTRUTOR DA CLASSE USUARIO

        this.nome = nome;
        this.nascimento = nascimento;

    }
}

const Leandro = new Pessoas('leandro21', '123', 'Leandro Carvalho', new Date());