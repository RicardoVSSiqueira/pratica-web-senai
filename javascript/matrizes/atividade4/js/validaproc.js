function validaproc(){

    let matriz=[];
    let linha=2;
    let coluna=3;

    for(i = 0; i < linha; i++){

        matriz [i]= [];

        for(c = 0; c < coluna; c++){
  
           matriz[i][c] = parseInt(prompt("Digite o valor da linha "+ i + " e coluna "+c));
           console.log("Valor : "+matriz[i][c]);
           
        }
    }
       
        for(i = 0; i < linha; i++){

            for(c = 0; c < coluna; c++){
    
                document.write(matriz[i]+" &nbsp");
               
            }
            
                document.write("<br>");
        }
        
    console.table(matriz)
    return false;

}