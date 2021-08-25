function Meses(...meses: number[]) { // RECEBE QTD INDEFINIDA DE MESES E JOGA DENTRO DO ARRAY MESES
    return meses.reduce((mesTotal, mesAtual) => mesTotal, 0);
}

Meses(10, 20, 30, 40, 50, 60, 70, 80, 90)