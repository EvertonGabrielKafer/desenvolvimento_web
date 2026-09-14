const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Digite o nome do cliente: ', (nome) => {
    rl.question('Digite a agência do cliente: ', (agencia) => {
        rl.question('Digite o numero da conta: ', (numero) => {
            rl.question('Digite o saldo inicial: ', (saldo) => {
                saldo = parseFloat(saldo);
 
                menu(nome, saldo, agencia, numero);
            
            });
        });
    }); 
});

function menu(nome, saldo, agencia, numero) {

    console.log("\n===== MENU =====");
    console.log("1 - Consultar Conta");
    console.log("2 - Consultar Saldo");
    console.log("3 - Realizar Debito");
    console.log("4 - Realizar Crédito");
    console.log("0 - Sair");

    rl.question('Escolha uma opção: ', (opcao) => {

        switch (opcao) {

            case "1":
                console.log("\nConsulta da conta: \n");
                console.log("Cliente: " + nome);
                console.log("Agência: " + agencia);
                console.log("Numero de conta: " + numero);

                menu(nome, saldo, agencia, numero);
                break;

            case "2":
                console.log("\nConsulta de saldo da conta: \n");
                console.log("Valor em conta: R$" + saldo);

                menu(nome, saldo, agencia, numero);
                break;

            case "3":
                console.log("\nRealizar Debito de dinheiro: \n");
                rl.question('Valor á debitar: ', (valor) => {
                    valor = parseFloat(valor);

                    if(valor > 0 && valor <= saldo){
                        saldo = saldo - valor;
                        console.log("Valor em conta: R$" + saldo);
                    } else {
                        console.log("Valor inválido.")
                    }

                    menu(nome, saldo, agencia, numero);
                });

                break;

            case "4":
                console.log("\nRealizar Crédito de dinheiro: \n");
                rl.question('Valor á creditar: ', (valor) => {
                    valor = parseFloat(valor);

                    if(valor > 0){
                        saldo = saldo + valor;
                        console.log("Valor em conta: R$" + saldo);
                    } else {
                        console.log("Valor inválido.")
                    }

                    menu(nome, saldo, agencia, numero);
                });
                
                break;

            case "0":
                console.log("\nTchau e bença\n");
                rl.close();
                break;

            default:
                console.log("\nEscreve certo!\n");
                menu(nome, saldo, agencia, numero);
        }

    });
}

// function formatarMoeda(valor) {
// return new Intl.NumberFormat('pt-BR', {
// style: 'currency',
// currency: 'BRL'
// }).format(valor);
// }