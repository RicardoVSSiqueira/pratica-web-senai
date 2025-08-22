function validaproc(){

    let matriz=[];
    let media=0;
    let acumala=0;
    let linha = 2;
    let coluna = 4;
    let somaSalario =0;
     
    for(i = 0; i < linha; i++){

        matriz[i] = [];

        for(c = 0; c < coluna; c++){
           
            matriz[i][c] = parseFloat(prompt("Insira a renda do " + (c + 1) + "º apartamento do " + (i + 1) + "º andar: " ));
            console.log("Renda : R$ " +matriz[i][c]);
            acumala += matriz[i][c];
            somaSalario += matriz[i][c];
        }
    }

    media = acumala /4;
    console.log("A média dos apartamentos é : R$ "+media);
    console.log("Soma dos Salários é : "+somaSalario);
    console.table(matriz);
    
return false; 

}