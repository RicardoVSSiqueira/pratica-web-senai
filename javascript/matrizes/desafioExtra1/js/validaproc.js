function validaproc(){

    let matriz=[]; 
    let linha = 4;
    let coluna = 4;
     
    for(i = 0; i < linha; i++){

        matriz[i] = [];

        for(c = 0; c < coluna; c++){
           
            matriz[i][c] = parseFloat(prompt("Preencha a Matriz: " ));
            console.log("Matriz : " +matriz[i][c]);
            
        }
    }

    for(i = 0; i < linha; i++){

        console.log("Diagonal primaria : "+ matriz[i][i]);

    }

    for(i = 0; i < linha; i++){

        console.log("Diagonal secundaria : "+ matriz[i][3 - i]);

    }
    
    console.table(matriz);
    return false; 

}