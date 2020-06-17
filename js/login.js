function verificar() {
    //DADOS DOS CAMPOS
    let campo = {
        email: (email.value).trim(),
        senha: senha.value
    };
    //VERIFICAR EMAIL
    let ver_arroba = campo.email.indexOf('@') > 0;
    let ver_ponto = campo.email.indexOf('.') > 0;

    //VERIFICAR TODOS OS DADOS
    if (!ver_arroba || !ver_ponto) {
        alert('Email inválido')
    } else {if(campo.senha == ''){
        alert('O campo senha vazio')
    } else {
        window.location.href = "piano_virtual.html";
    }
} 

}