/* A IDEIA DA CLASSE ABSTRATA, É COMO CRIAR UM MODELO, QUE NAO PODE SER
INSTANCIADO, POREM É EXTENDIDO PARA OUTRAS CLASSES, PARA QUE ESSAS OUTRAS POSSAM USAR
SEUS METODOS E PARAMETROS. */

interface MeuUsuario {
    nome: string;
    telefone: string;
}

abstract class Notificacao {
    abstract enviar(usuario: MeuUsuario): boolean;
} 

class Email extends Notificacao {
    enviar(usuario: MeuUsuario): boolean {
        return true;
    }
}