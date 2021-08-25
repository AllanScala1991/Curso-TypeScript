interface IJogos {
    nome: string;
    valor: number;
    disponibilidade: boolean;
}

class Jogos implements IJogos {
    
    nome: string;
    valor: number;
    disponibilidade: boolean;
    
    constructor(games: IJogos) {
        this.nome = games.nome;
        this.valor = games.valor;
        this.disponibilidade = games.disponibilidade;
    }
}