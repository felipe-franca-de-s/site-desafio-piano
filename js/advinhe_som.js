// TELAS DO JOGO
function jogar() {
    ver_comecar.style.display = 'none';
    ver_jogo.style.display = 'block';
    ver_resultado.style.display = 'none';

}
function continuar() {
    ver_comecar.style.display = 'none';
    ver_jogo.style.display = 'none';
    ver_resultado.style.display = 'block';
}
function jogar_de_novo() {
    ver_comecar.style.display = 'block';
    ver_jogo.style.display = 'none';
    ver_resultado.style.display = 'none';
}