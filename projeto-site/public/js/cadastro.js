function verificar() {
    // DADOS DOS CAMPOS
    let campo = {
        prim_nome: (prim_nome.value).trim(),
        sobrenome: (sobrenome.value).trim(),
        email: (email.value).trim(),
        rep_email: (rep_email.value).trim(),
        senha: senha.value,
        rep_senha: rep_senha.value
    };

    // VERIFICAR CAMPOS VAZIOS
    let vazio_prim_nome = campo.prim_nome.length == 0;
    let vazio_sobrenome = campo.sobrenome.length == 0;
    let vazio_email = campo.email.length == 0;
    let vazio_rep_email = campo.rep_email.length == 0;
    let vazio_senha = campo.senha.length == 0;
    let vazio_rep_senha = campo.rep_senha.length == 0;
    // VERIFICAR NOME
    let tamanho_prim_nome = campo.prim_nome.length > 20;
    let tamanho_sobrenome = campo.sobrenome.length > 50;
    // VERIFICAR EMAIL
    let ver_arroba = campo.email.indexOf('@') > -1;
    let ver_ponto = campo.email.indexOf('.') > -1;
    let email_igual = campo.email == campo.rep_email;
    // VERIFICAR SENHA
    let tamanho_senha = campo.senha.length < 8;
    let ver_senha = campo.senha == campo.rep_senha;

    // VALIDANDO OS DADOS
    // campo vazio
    if (vazio_prim_nome || vazio_sobrenome || vazio_email || vazio_rep_email || vazio_senha || vazio_rep_senha){
        alert('CAMPO VAZIO. Coloque todos os dados.')
    }
    // nome
    else if(tamanho_prim_nome){
        prim_nome.value = '';
        alert('NOME GRANDE. Reduza o seu Primeiro Nome.');
    } else if(tamanho_sobrenome){
        sobrenome.value = '';
        alert('SOBRENOME GRANDE. Reduza o seu Sobrenome.');
    }
    // email
    else if(!ver_arroba || !ver_ponto){
        email.value = '';
        alert('EMAIL INCORRETO. Verifique seu E-mail.');
    }  else if(!email_igual){
        alert('EMAIL INCORRETO. Verifique o E-mail Repetido.');
    }
    // senha
    else if(tamanho_senha){
        senha.value = '';
        alert('TAMANHO INVÁLIDO DE SENHA. Verifique sua Senha.');
    } else if(!ver_senha){
        alert('SENHA INCORRETA. Verifique a Senha e a Senha Repetida');
    }
    // VALIDANDO TODOS OS DADOS
    else{
        alert('Cadastro realizado com Sucesso!')
        window.location.href = "./login.html";
    }
}