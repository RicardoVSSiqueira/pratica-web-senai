function validaproc(){

    let matriz=[];
    let linha=2;
    let coluna=2;

    for(i = 0; i < linha; i++){

        matriz [i]= [];

        for(c = 0; c < coluna; c++){

           matriz[i][c] = i + c;
        }
    }
       
        for(i = 0; i < linha; i++){

            for(c = 0; c < coluna; c++){
    
                document.write(matriz[i]+" &nbsp");
                console.log("Soma dos índices : "+ matriz[i])
               
            }
            
                document.write("<br>");
        }
      
    return false;

}