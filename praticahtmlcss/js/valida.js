function valida(){

    let nome = document.frmfaleconosco.txtnome.value;
    let expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if (!expRegNome.test(nome)){

        alert("Preencha o campo Nome corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
        
    }
    
    let telefone = document.frmfaleconosco.txtfone.value;
    let expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if (!expRegFone.test(telefone)){

        alert("Preencha o campo Telefone corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    
    let email = document.frmfaleconosco.txtemail.value;
    let expRegEmail = new RegExp("^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$")

    if (!expRegEmail.test(email)){

        alert("Preencha o campo Email corretamente.");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }


    return true;
}