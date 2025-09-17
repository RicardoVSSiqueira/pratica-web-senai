function procFormulario(){

    let num=[];
    let i =0;
    let cont = 0;
    let maiorNum = 0;
    
    
    if(document.frmnumint.txtnumint.value==""){

        alert("Preencha o campo número inteiro");
        document.frmnumint.txtnumint.focus();
        return false;

    } 
        else{

             let numint = parseInt(document.getElementById('numint').value);

             if(numint>= 0){

                alert("número informado "+numint);
                cont++;

             } else{

                alert("Erro, apenas números inteiros");

             }

            for(i = 0; i <1; i++){
             


                }
            }
                               
           
            
            while(i<=3){

                let num = parseInt(prompt("Digite o número " + i + ":")); 
                i++;
                if(num >= maiorNum){
        
                     maiorNum = num;
                     num = maiorNum;
                    
                }
                
                console.log("O numero informado é : "+num);        
            }
        
            console.log("O maior número : "+maiorNum);   
            return false;
}