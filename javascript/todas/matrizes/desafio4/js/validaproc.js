function validaproc(){

    let matriz=[];
    let linha = 4;
    let coluna = 5;
    let soma = 0;
    let somaLinha = 0;
    
     
    for(i = 0; i < linha; i++){

        matriz[i] = [];

        for(c = 0; c < coluna; c++){
           
            matriz[i][c] = parseFloat(prompt("Preencha a matriz : " ));
            console.log(" linha e coluna : " +matriz[i][c]);
            soma += matriz[i][c];
           
        }
    }
    for(i = 0; i < linha; i++){

        for(c = 0; c < coluna; c++){

            somaLinha += matriz[i][c];
        }
        
        console.log("Soma da linha : "+ somaLinha);
    }
 
    //console.log("Soma da linha : "+ somaLinha +" : "+soma);
    console.log("A soma dos elementos é : "+soma);
    console.table(matriz);
   
    
return false; 

}