function validaproc(){

    let matriz=[];
    let soma=0;
    let linha = 4;
    let coluna = 3;
     
    for(i = 0; i < linha; i++){

        matriz[i] = [];

        for(c = 0; c < coluna; c++){
           
            matriz[i][c] = parseFloat(prompt("Preencha a matriz para ter o resultado da soma total dela : " ));
            console.log(" linha e coluna : " +matriz[i][c]);
            soma += matriz[i][c];
        }
    }

    console.log("A soma da matriz é : "+soma);
    console.table(matriz);
    
return false; 

}