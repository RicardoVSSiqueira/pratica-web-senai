function validaproc(){

    let matriz = [];
    let nome = [];
    let media = [];
    let quanCompras = [];
    let linha = 3; 
    let coluna = 3; 
    let op;
    let encontrou = false;

    for(let n = 0; n < linha; n++){
        
        matriz[n] = [];
        nome[n] = prompt("Digite o nome do cliente " + (n + 1) + ": ");
        console.log("Cliente " + (n + 1) + ": " + nome[n]);
        quanCompras[n] = 0;
        media[n] = 0;

        for(let c = 0; c < coluna; c++){

            matriz[n][c] = parseFloat(prompt("Digite o valor da compra do mês " + (c + 1) + " para o cliente " + nome[n] + ":"));
            console.log("Valor da compra do cliente no mês " + (c + 1) + ": R$ " + matriz[n][c]);
            
            if(matriz[n][c] > 0){

                quanCompras[n]++;
                media[n] += matriz[n][c];

            }
        }

        if(quanCompras[n] > 0){

            media[n] = media[n] / quanCompras[n];

        }
    }

    do{

        op = parseFloat(prompt("Menu de opções: \n 1- Consultar média de compras \n 2- Consultar quantidade de compras \n 3- Sair"));
    
        switch(op){

            case 1:

                    busca = prompt("Digite o nome do cliente que deseja consultar : ");
                    encontrou = false;
    
                for(let i = 0; i < linha; i++){

                    if(nome[i] === busca){
                        
                        for(let c = 0; c < 3; c++){
                            
                            console.log("Mês " + (c + 1) + " : R$ " + matriz[i][c]);
                        }
    
                        console.log("Quantidade de compras do cliente é : " + quanCompras[i]);
                        console.log("Média de compras do cliente é : " + media[i].toFixed(2));
    
                        encontrou = true;
                        break;

                    }
                }

                if(! encontrou){

                    alert("Cliente não encontrado!");
                }
                break;
    
            case 2:

                    busca = prompt("Digite o nome do cliente para consultar quantidade de compras: ");
                    encontrou = false;
                    
    
                for(let i = 0; i < linha; i++){

                    if(nome[i] === busca){

                        console.log("A quantidade de compras do cliente " + nome[i] + " é: " + quanCompras[i]);
                        encontrou = true;
                        break;

                    }
                }

                if(! encontrou){

                    alert("Cliente não encontrado!");

                }

                break;
    
            case 3:

                    alert("Saindo...");
                    break;
    
            default:

                    alert("Opção inválida!");
        }

    }while(op !== 3);
    
   
}