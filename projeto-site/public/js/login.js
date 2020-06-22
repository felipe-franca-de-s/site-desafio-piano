function entrar() {
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

    // VALIDANDO COM O BANCO DE DADOS
    var formulario = new URLSearchParams(new FormData(entrar_pag_bonus));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {
        
        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.email;
                sessionStorage.nome_usuario_meuapp = json.prim_nome;
                
                window.location.href = 'piano_virtual.html';
            });

        } 
        // ERROS
        // campo vazio
        else if (vazio_email || vazio_senha){
            alert('CAMPO VAZIO. Coloque todos os dados.')
            response.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
        // email
        else if(!ver_arroba || !ver_ponto){
            email.value = '';
            alert('EMAIL INCORRETO. Verifique seu E-mail.');
            response.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        } 
        // senha
        else if(tamanho_senha){
            senha.value = '';
            alert('TAMANHO INVÁLIDO DE SENHA. Verifique sua Senha.');
            response.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}