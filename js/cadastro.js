

function verificar() {
    //DADOS DOS CAMPOS
    let campo = {
        nome: (nome.value).trim().toUpperCase(),
        dt_nasc: dt_nasc.value,
        sexo: sexo.value,
        email: (email.value).trim(),
        senha: senha.value,
        rep_senha: rep_senha.value
    };
    //VERIFICAR EMAIL
    let ver_arroba = campo.email.indexOf('@') > 0;
    let ver_ponto = campo.email.indexOf('.') > 0;
    //VERIFICAR SEXO
    if (campo.sexo == 'm') {
        campo.sexo = 'MASCULINO';
    } else if (campo.sexo == 'f') {
        campo.sexo = 'FEMININO';
    } else if (campo.sexo == 'i') {
        campo.sexo = 'INDEFINIDO';
    }
    //VERIFICAR SENHA
    let ver_senha = campo.senha == campo.rep_senha;

    //VERIFICAR TODOS OS DADOS
    if (!ver_senha) {
        alert(`Cadastro Incorreto. Senha diferente`)
    } else if (!ver_arroba || !ver_ponto) {
        alert('Cadastro Incorreto. Email inválido')
    } else {
        alert('Cadastro Completo')
        alert(`${campo.nome};${campo.dt_nasc};${campo.sexo};${campo.email};${campo.senha}`)
    }

}