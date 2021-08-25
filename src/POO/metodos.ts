class Professor {
    nome: string;
    materia: string;

    constructor(nome: string, materia: string){
        this.nome = nome;
        this.materia = materia;
    }

    seApresentar ():string { // METODO QUE RETORNA UMA STRING
        return `Olá, meu nome é ${this.nome} e vou dar aula de ${this.materia}`
    }

    Notas(...notas: number []):number{ // METODO QUE RETORNA UM NUMBER
        const totalNotas = notas.reduce((total, notalAtual) => total + notalAtual, 0);

        return totalNotas / notas.length;
    }
}

const Ricardo = new Professor("Ricardo", "Python");


console.log(Ricardo.seApresentar());
console.log(Ricardo.Notas(10, 8, 7, 6));