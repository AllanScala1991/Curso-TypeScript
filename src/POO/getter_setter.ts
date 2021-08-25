class Permissoes {

    constructor(private _nome: string) {

    }

    get nome () { // TODO GETTER TEM QUE TER UM RETORNO
        return this._nome.toUpperCase();
    }

    set nome (meuNome) { // TODO O SETTER TEM QUE TER UM PARAMETRO, MAS NAO UM RETORNO
        this._nome = meuNome;
    }
}

const permissao = new Permissoes("Administrador");

console.log(permissao.nome)// FAZ O GETTER
permissao.nome = "Adm"; // FAZ O SETTER