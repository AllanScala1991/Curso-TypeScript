/* OS GENERICS CRIAM TIPOS QUE SÃO PARECIDOS COM INDEFINIDOS, POREM ELES PODEM RECEBER OU RETORNAR APENAS
ALGO QUE SÃO GENERICOS TBEM */

function arrayNomes <Generics> (nomesArray: Generics): Generics {

    return nomesArray

}

/* A FUNCAO ACIMA, É TRATADA COM UM GENERIC QUE FOI DADO O NOME DE GENERICS,
ELA RECEBE COMO PARAMETRO UM ARRAY, EM QUE TODO ELE É CONSIDERADO UM GENERICS E 
TAMBEM O RETORNO DELA DEVE SER DO MESMO TIPO */