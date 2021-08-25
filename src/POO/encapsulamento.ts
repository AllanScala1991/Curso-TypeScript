
class Carro {
    cor: string;

    constructor(cor:string){
        this.cor = cor;
    }

    // PUBLIC - PODE SER ACESSADO POR QUALQUER UM
    public mudarCor(updateColor: string): string{ 
        this.cor = updateColor;
        return this.cor;
    }

    // PROTECTED - SÓ PODE SER ACESSADO PELO PAI OU PELOS FILHOS, NÃO APARECE EM UMA NOVA INSTANCIA
    protected velocidade(vel: number): number {
        return vel;
    }

    // PRIVATE - SÓ PODE SER ACESSADO PELA PROPRIA CLASSE, NÃO APARECE EM UMA NOVA INSTANCIA
    private motor(motor: number): number {
        return motor;
    }
}

const car = new Carro("Vermelho");
car.mudarCor("Preto");



