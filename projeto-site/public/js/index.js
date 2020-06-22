// VISUALIZAR OPÇÕES DO MENU
function ver_historia() {
    msg_titulo.innerHTML = 'História';
    historia.style.display = 'block';
    tipo_piano.style.display = 'none';
    pianistas.style.display = 'none';
    curiosidades.style.display = 'none';
}
function ver_tipo() {
    msg_titulo.innerHTML = 'Tipos de Piano';
    historia.style.display = 'none';
    tipo_piano.style.display = 'block';
    pianistas.style.display = 'none';
    curiosidades.style.display = 'none';
}
function ver_pianistas() {
    msg_titulo.innerHTML = 'Pianistas Famosos';
    historia.style.display = 'none';
    tipo_piano.style.display = 'none';
    pianistas.style.display = 'block';
    curiosidades.style.display = 'none';
}
function ver_curiosidades() {
    msg_titulo.innerHTML = 'Curiosidades';
    historia.style.display = 'none';
    tipo_piano.style.display = 'none';
    pianistas.style.display = 'none';
    curiosidades.style.display = 'block';
}