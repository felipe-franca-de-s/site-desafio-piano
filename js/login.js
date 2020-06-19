function verificar() {
    // DADOS DOS CAMPOS
    let campo = {
        email: (email.value).trim(),
        senha: senha.value
    };

    // VERIFICAR CAMPOS VAZIOS
    let vazio_email = campo.email.length == 0;
    let vazio_senha = campo.senha.length == 0;
    // VERIFICAR EMAIL
    let ver_arroba = campo.email.indexOf('@') > -1;
    let ver_ponto = campo.email.indexOf('.') > -1;
    // VERIFICAR SENHA
    let tamanho_senha = campo.senha.length < 8;

    // VALIDANDO OS DADOS
    // campo vazio
    if (vazio_email || vazio_senha){
        alert('CAMPO VAZIO. Coloque todos os dados.')
    }
    // email
    else if(!ver_arroba || !ver_ponto){
        email.value = '';
        alert('EMAIL INCORRETO. Verifique seu E-mail.');
    } 
    // senha
    else if(tamanho_senha){
        senha.value = '';
        alert('TAMANHO INVÁLIDO DE SENHA. Verifique sua Senha.');
    }
    // VALIDANDO TODOS OS DADOS
    else{
        window.location.href = "./piano_virtual.html";
    }
}