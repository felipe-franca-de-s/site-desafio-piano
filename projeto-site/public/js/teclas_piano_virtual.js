// VISUALIZAÇÃO DAS TECLAS DO TECLADO
function aparecer_teclas() {
  const visual_aparece = document.getElementsByClassName("visual");
  for (let contador = 0; contador < visual_aparece.length; contador++) {
    visual_aparece[contador].style.display = 'block';
  }
  btn_teclas_aparecer.style.display = 'none';
  btn_teclas_esconder.style.display = 'block';
}
function esconder_teclas() {
  const visual_esconde = document.getElementsByClassName("visual");
  for (let contador = 0; contador < visual_esconde.length; contador++) {
    visual_esconde[contador].style.display = 'none';
  }
  btn_teclas_aparecer.style.display = 'block';
  btn_teclas_esconder.style.display = 'none';
}
// NOTAS DECLARADAS NO TECLADO
window.onload = function () {
  window.onkeypress = function (evento) {
    var tecla_codigo;
    var tecla_valor;
    if (window.event) {
      tecla_codigo = evento.keyCode;
    }
    tecla_valor = String.fromCharCode(tecla_codigo);

    // ESCALA 3  SOM -------------------------------------------------------
    if (tecla_valor == 'q') {
      escala3.c3_acao.currentTime = 0;
      escala3.c3_acao.volume = 0.3;
      escala3.c3_acao.play();
      if (escala3.c3_acao.play()) {
        nota_x.innerHTML = 'Dó';
        apertado_tecla[0].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[0].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == '2') {
      escala3.db3_acao.currentTime = 0;
      escala3.db3_acao.volume = 0.3;
      escala3.db3_acao.play();
      if (escala3.db3_acao.play()) {
        nota_x.innerHTML = 'Réb';
        apertado_tecla[1].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[1].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'w') {
      escala3.d3_acao.currentTime = 0;
      escala3.d3_acao.volume = 0.3;
      escala3.d3_acao.play();
      if (escala3.d3_acao.play()) {
        nota_x.innerHTML = 'Ré';
        apertado_tecla[2].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[2].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == '3') {
      escala3.eb3_acao.currentTime = 0;
      escala3.eb3_acao.volume = 0.3;
      escala3.eb3_acao.play();
      if (escala3.eb3_acao.play()) {
        nota_x.innerHTML = 'Mib';
        apertado_tecla[3].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[3].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'e') {
      escala3.e3_acao.currentTime = 0;
      escala3.e3_acao.volume = 0.3;
      escala3.e3_acao.play();
      if (escala3.e3_acao.play()) {
        nota_x.innerHTML = 'Mi';
        apertado_tecla[4].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[4].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == 'r') {
      escala3.f3_acao.currentTime = 0;
      escala3.f3_acao.volume = 0.3;
      escala3.f3_acao.play();
      if (escala3.f3_acao.play()) {
        nota_x.innerHTML = 'Fá';
        apertado_tecla[5].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[5].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == '5') {
      escala3.gb3_acao.currentTime = 0;
      escala3.gb3_acao.volume = 0.3;
      escala3.gb3_acao.play();
      if (escala3.gb3_acao.play()) {
        nota_x.innerHTML = 'Solb';
        apertado_tecla[6].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[6].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 't') {
      escala3.g3_acao.currentTime = 0;
      escala3.g3_acao.volume = 0.3;
      escala3.g3_acao.play();
      if (escala3.g3_acao.play()) {
        nota_x.innerHTML = 'Sol';
        apertado_tecla[7].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[7].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == '6') {
      escala3.ab3_acao.currentTime = 0;
      escala3.ab3_acao.volume = 0.3;
      escala3.ab3_acao.play();
      if (escala3.ab3_acao.play()) {
        nota_x.innerHTML = 'Láb';
        apertado_tecla[8].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[8].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'y') {
      escala3.a3_acao.currentTime = 0;
      escala3.a3_acao.volume = 0.3;
      escala3.a3_acao.play();
      if (escala3.a3_acao.play()) {
        nota_x.innerHTML = 'Lá';
        apertado_tecla[9].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[9].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == '7') {
      escala3.bb3_acao.currentTime = 0;
      escala3.bb3_acao.volume = 0.3;
      escala3.bb3_acao.play();
      if (escala3.bb3_acao.play()) {
        nota_x.innerHTML = 'Sib';
        apertado_tecla[10].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[10].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'u') {
      escala3.b3_acao.currentTime = 0;
      escala3.b3_acao.volume = 0.3;
      escala3.b3_acao.play();
      if (escala3.b3_acao.play()) {
        nota_x.innerHTML = 'Si';
        apertado_tecla[11].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[11].style.backgroundColor = 'white';
        }, 200);
      }
    }

    // ESCALA 4  SOM -------------------------------------------------------
    if (tecla_valor == 'i') {
      escala4.c4_acao.currentTime = 0;
      escala4.c4_acao.volume = 0.3;
      escala4.c4_acao.play();
      if (escala4.c4_acao.play()) {
        nota_x.innerHTML = 'Dó';
        apertado_tecla[12].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[12].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == '9') {
      escala4.db4_acao.currentTime = 0;
      escala4.db4_acao.volume = 0.3;
      escala4.db4_acao.play();
      if (escala4.db4_acao.play()) {
        nota_x.innerHTML = 'Réb';
      }
      apertado_tecla[13].style.backgroundColor = '#CCC';
      setTimeout(function () {
        apertado_tecla[13].style.backgroundColor = 'black';
      }, 200);
    }
    if (tecla_valor == 'o') {
      escala4.d4_acao.currentTime = 0;
      escala4.d4_acao.volume = 0.3;
      escala4.d4_acao.play();
      if (escala4.d4_acao.play()) {
        nota_x.innerHTML = 'Ré';
        apertado_tecla[14].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[14].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == '0') {
      escala4.eb4_acao.currentTime = 0;
      escala4.eb4_acao.volume = 0.3;
      escala4.eb4_acao.play();
      if (escala4.eb4_acao.play()) {
        nota_x.innerHTML = 'Mib';
        apertado_tecla[15].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[15].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'p') {
      escala4.e4_acao.currentTime = 0;
      escala4.e4_acao.volume = 0.3;
      escala4.e4_acao.play();
      if (escala4.e4_acao.play()) {
        nota_x.innerHTML = 'Mi';
        apertado_tecla[16].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[16].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == 'z') {
      escala4.f4_acao.currentTime = 0;
      escala4.f4_acao.volume = 0.3;
      escala4.f4_acao.play();
      if (escala4.f4_acao.play()) {
        nota_x.innerHTML = 'Fá';
        apertado_tecla[17].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[17].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == 's') {
      escala4.gb4_acao.currentTime = 0;
      escala4.gb4_acao.volume = 0.3;
      escala4.gb4_acao.play();
      if (escala4.gb4_acao.play()) {
        nota_x.innerHTML = 'Solb';
        apertado_tecla[18].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[18].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'x') {
      escala4.g4_acao.currentTime = 0;
      escala4.g4_acao.volume = 0.3;
      escala4.g4_acao.play();
      if (escala4.g4_acao.play()) {
        nota_x.innerHTML = 'Sol';
        apertado_tecla[19].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[19].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == 'd') {
      escala4.ab4_acao.currentTime = 0;
      escala4.ab4_acao.volume = 0.3;
      escala4.ab4_acao.play();
      if (escala4.ab4_acao.play()) {
        nota_x.innerHTML = 'Láb';
        apertado_tecla[20].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[20].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'c') {
      escala4.a4_acao.currentTime = 0;
      escala4.a4_acao.volume = 0.3;
      escala4.a4_acao.play();
      if (escala4.a4_acao.play()) {
        nota_x.innerHTML = 'Lá';
        apertado_tecla[21].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[21].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == 'f') {
      escala4.bb4_acao.currentTime = 0;
      escala4.bb4_acao.volume = 0.3;
      escala4.bb4_acao.play();
      if (escala4.bb4_acao.play()) {
        nota_x.innerHTML = 'Sib';
        apertado_tecla[22].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[22].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'v') {
      escala4.b4_acao.currentTime = 0;
      escala4.b4_acao.volume = 0.3;
      escala4.b4_acao.play();
      if (escala4.b4_acao.play()) {
        nota_x.innerHTML = 'Si';
        apertado_tecla[23].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[23].style.backgroundColor = 'white';
        }, 200);
      }
    }
    // ESCALA 5  SOM -------------------------------------------------------
    if (tecla_valor == 'b') {
      escala5.c5_acao.currentTime = 0;
      escala5.c5_acao.volume = 0.3;
      escala5.c5_acao.play();
      if (escala5.c5_acao.play()) {
        nota_x.innerHTML = 'Dó';
        apertado_tecla[24].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[24].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == 'h') {
      escala5.db5_acao.currentTime = 0;
      escala5.db5_acao.volume = 0.3;
      escala5.db5_acao.play();
      if (escala5.db5_acao.play()) {
        nota_x.innerHTML = 'Réb';
        apertado_tecla[25].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[25].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'n') {
      escala5.d5_acao.currentTime = 0;
      escala5.d5_acao.volume = 0.3;
      escala5.d5_acao.play();
      if (escala5.d5_acao.play()) {
        nota_x.innerHTML = 'Ré';
        apertado_tecla[26].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[26].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == 'j') {
      escala5.eb5_acao.currentTime = 0;
      escala5.eb5_acao.volume = 0.3;
      escala5.eb5_acao.play();
      if (escala5.eb5_acao.play()) {
        nota_x.innerHTML = 'Mib';
        apertado_tecla[27].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[27].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == 'm') {
      escala5.e5_acao.currentTime = 0;
      escala5.e5_acao.volume = 0.3;
      escala5.e5_acao.play();
      if (escala5.e5_acao.play()) {
        nota_x.innerHTML = 'Mi';
        apertado_tecla[28].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[28].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == ',') {
      escala5.f5_acao.currentTime = 0;
      escala5.f5_acao.volume = 0.3;
      escala5.f5_acao.play();
      if (escala5.f5_acao.play()) {
        nota_x.innerHTML = 'Fá';
        apertado_tecla[29].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[29].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == 'l') {
      escala5.gb5_acao.currentTime = 0;
      escala5.gb5_acao.volume = 0.3;
      escala5.gb5_acao.play();
      if (escala5.gb5_acao.play()) {
        nota_x.innerHTML = 'Solb';
        apertado_tecla[30].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[30].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == '.') {
      escala5.g5_acao.currentTime = 0;
      escala5.g5_acao.volume = 0.3;
      escala5.g5_acao.play();
      if (escala5.g5_acao.play()) {
        nota_x.innerHTML = 'Sol';
        apertado_tecla[31].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[31].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == 'ç') {
      escala5.ab5_acao.currentTime = 0;
      escala5.ab5_acao.volume = 0.3;
      escala5.ab5_acao.play();
      if (escala5.ab5_acao.play()) {
        nota_x.innerHTML = 'Láb';
        apertado_tecla[32].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[32].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == ';') {
      escala5.a5_acao.currentTime = 0;
      escala5.a5_acao.volume = 0.3;
      escala5.a5_acao.play();
      if (escala5.a5_acao.play()) {
        nota_x.innerHTML = 'Lá';
        apertado_tecla[33].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[33].style.backgroundColor = 'white';
        }, 200);
      }
    }
    if (tecla_valor == ']') {
      escala5.bb5_acao.currentTime = 0;
      escala5.bb5_acao.volume = 0.3;
      escala5.bb5_acao.play();
      if (escala5.bb5_acao.play()) {
        nota_x.innerHTML = 'Sib';
        apertado_tecla[34].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[34].style.backgroundColor = 'black';
        }, 200);
      }
    }
    if (tecla_valor == '/') {
      escala5.b5_acao.currentTime = 0;
      escala5.b5_acao.volume = 0.3;
      escala5.b5_acao.play();
      if (escala5.b5_acao.play()) {
        nota_x.innerHTML = 'Si';
        apertado_tecla[35].style.backgroundColor = '#CCC';
        setTimeout(function () {
          apertado_tecla[35].style.backgroundColor = 'white';
        }, 200);
      }
    }
  }
}