/* POLIMORFISMO É O CONCEITO DE UMA CLASSE EXTENDER A OUTRA E USAR 
O MESMO METODO, POREM COM RETORNOS DIFERENTES , SOBRESCREVENDO O MESMO.
*/

class Empresa {

    prestaServico() {
        return "Pretadora de Serviço"
    }
}

class Padaria extends Empresa {

    prestaServico() {
        return "Vende pães"
    }
}