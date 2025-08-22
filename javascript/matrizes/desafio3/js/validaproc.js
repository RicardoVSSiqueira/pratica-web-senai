function validaproc(){

    let matriz=[];
    let linha = 5;
    let coluna = 5;
    let matrizNova = [];
     
    for(i = 0; i < linha; i++){

        matriz[i] = [];
        matrizNova[i] = []

        for(c = 0; c < coluna; c++){
           
            matriz[i][c] = parseFloat(prompt("Preencha a matriz : " ));
            console.log(" linha e coluna : " +matriz[i][c]);
            matrizNova[i][c] = matriz[i][c] * 2;
        }
    }

    console.table(matriz);
    console.table(matrizNova);
    
return false; 

}