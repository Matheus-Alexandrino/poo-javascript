// 1. Crie a classe ContaBancaria, que possui os parâmetros 'agência', 'número', 'tipo', e 'saldo' ;
class ContaBancaria {
    constructor(agencia, numero, tipo ) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
        //usa-se underline na frente para usar no Getter e no Setter
    }

    // 2. Dentro de ContaBancaria, construa o getter e o setter de saldo;
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
    // 3. Dentro de ContaBancaria, crie os métodos sacar e depositar;
    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada! Saldo insuficiente";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

// 4. Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro CartaoCredito;

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero); //Manda para a classe-Pai
        // 6. Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão
        this.tipo = 'conta corrente';
        this._cartaoCredito = cartaoCredito;
    }
    // 5. Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;    
    get saldo() {
        return this._cartaoCredito;
    }

    set saldo(valor) {
        this._cartaoCredito = valor;
    }
}

// 7. Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero); //Manda para a classe-Pai

        this.tipo = 'poupança';
        
    }

}
// 8. Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero); //Manda para a classe-Pai

        this.tipo = 'universitária';
    }
// 9. Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
    sacar(valor) {
        if(valor > 500) {
            return "Operação negada! Valor máximo de saque é de R$500,00";         
        }

        this._saldo = this._saldo - valor;
    }


}


