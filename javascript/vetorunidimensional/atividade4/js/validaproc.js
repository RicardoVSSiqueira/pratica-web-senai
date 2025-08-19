function validaproc(){

    
    let i; 
    let num=[];
    

    for(i = 1; i<11; i++){

        num[i] = parseFloat(prompt("Digite 10 número reais, número : "+i));
       // console.log("número : "+num[i])
      
    }

    // Retirando os valores de cada posição do vetor...
    for(i = 1; i<11;i++){

        if(i % 2 !== 0){

            console.log("\nNúmero " + num[i] + " está na posição "+i);
        }
       
           
    }
         
return false; 

}