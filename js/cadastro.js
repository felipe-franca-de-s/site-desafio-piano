function verificar() {
    // DADOS DOS CAMPOS
    let campo = {
        prim_nome: (prim_nome.value).trim().toUpperCase(),
        sobrenome: (sobrenome.value).trim().toUpperCase(),
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
    let tamanho_prim_nome = campo.prim_nome.length <= 25;
    let tamanho_sobrenome = campo.sobrenome.length <= 50;
    // VERIFICAR EMAIL
    let ver_arroba = campo.email.indexOf('@') > 0;
    let ver_com = campo.email.endsWith('.com');
    let ver_br = campo.email.endsWith('.br');
    let email_igual = campo.email == campo.rep_email;
    // VERIFICAR SENHA
    let tamanho_senha = campo.senha.length <= 8;
    let ver_senha = campo.senha == campo.rep_senha;

    // VALIDANDO TODOS OS DADOS
    // campo vazio
    if (vazio_prim_nome || vazio_sobrenome || vazio_email || vazio_rep_email || vazio_senha || vazio_rep_senha){
        alert('Campo vazio. Coloque todos os dados.')
    }
    // nome
    if(!tamanho_prim_nome){
        prim_nome.value = '';
        prim_nome.value += 'INSIRA UM NOME MENOR';
    }
}