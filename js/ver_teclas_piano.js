function esconder_teclas() {
    const visual1 = document.getElementsByClassName("esconder");
    for(let contador = 0;contador < visual1.length;contador++){
        visual1[contador].style.display = 'none';
    }
}
function aparecer_teclas() {
    const visual2 = document.getElementsByClassName("esconder");
    for(let contador = 0;contador < visual2.length;contador++){
        visual2[contador].style.display = 'block';
    }
}