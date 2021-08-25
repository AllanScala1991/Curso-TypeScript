interface ICalculos {
    somar(num1: number, num2: number): number; // FUNCAO SOMA QUE RECEBE DOIS NUMEROS E RETORNA UM NUMERO
    subtrair(num1: number, num2: number): number;
}

let calculadora: ICalculos;

calculadora = {
    somar : (n1: number, n2: number) => n1 + n2,
    subtrair: (n1: number, n2: number) => n1 - n2
}