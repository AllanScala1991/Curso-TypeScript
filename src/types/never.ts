let n = 0;

function loopInfinito(): never { // TIPO NEVER NUNCA RETORNA NADA TAMBEM.
    while(true){
        console.log(n++)
    }
}

loopInfinito();