
class Pessoa {
    nome: string;
    idade: number;
    altura: number;
    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

const allan = new Pessoa("Allan Scala", 30, 1.75);


// classe com construtor simplificado.
class Pessoa2 {
    constructor(public nome: string, protected idade: number, private altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

const allan2 = new Pessoa("Allan Scala", 30, 1.75);