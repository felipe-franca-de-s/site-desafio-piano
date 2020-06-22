// TROCAR COR TECLAS
const apertado_tecla = document.getElementsByClassName("tecla");

// TECLAS DECLARADAS
const escala3 = {
  c3_acao: document.getElementById("c3"),
  db3_acao: document.getElementById("db3"),
  d3_acao: document.getElementById("d3"),
  eb3_acao: document.getElementById("eb3"),
  e3_acao: document.getElementById("e3"),
  f3_acao: document.getElementById("f3"),
  gb3_acao: document.getElementById("gb3"),
  g3_acao: document.getElementById("g3"),
  ab3_acao: document.getElementById("ab3"),
  a3_acao: document.getElementById("a3"),
  bb3_acao: document.getElementById("bb3"),
  b3_acao: document.getElementById("b3")
}

const escala4 = {
  c4_acao: document.getElementById("c4"),
  db4_acao: document.getElementById("db4"),
  d4_acao: document.getElementById("d4"),
  eb4_acao: document.getElementById("eb4"),
  e4_acao: document.getElementById("e4"),
  f4_acao: document.getElementById("f4"),
  gb4_acao: document.getElementById("gb4"),
  g4_acao: document.getElementById("g4"),
  ab4_acao: document.getElementById("ab4"),
  a4_acao: document.getElementById("a4"),
  bb4_acao: document.getElementById("bb4"),
  b4_acao: document.getElementById("b4")
}

const escala5 = {
  c5_acao: document.getElementById("c5"),
  db5_acao: document.getElementById("db5"),
  d5_acao: document.getElementById("d5"),
  eb5_acao: document.getElementById("eb5"),
  e5_acao: document.getElementById("e5"),
  f5_acao: document.getElementById("f5"),
  gb5_acao: document.getElementById("gb5"),
  g5_acao: document.getElementById("g5"),
  ab5_acao: document.getElementById("ab5"),
  a5_acao: document.getElementById("a5"),
  bb5_acao: document.getElementById("bb5"),
  b5_acao: document.getElementById("b5")
}

// ESCALA 3 SOM ---------------------------------------------
function c3_som() {
  // ZERAR SOM TECLA
  escala3.c3_acao.currentTime = 0;
  // VOLUME DA TECLA
  escala3.c3_acao.volume = 0.3;
  // PLAY TECLA
  escala3.c3_acao.play();
  if (escala3.c3_acao.play()) {
    // NOME TECLA
    nota_x.innerHTML = 'Dó';
    // MUDAR COR DA TECLAS QUANDO CLICADO
    apertado_tecla[0].style.backgroundColor = '#CCC';
    setTimeout(function () {
      // VOLTAR A COR ORIGINAL DA TECLA
      apertado_tecla[0].style.backgroundColor = 'white';
    }, 100);
  }
}
function db3_som() {
  escala3.db3_acao.currentTime = 0;
  escala3.db3_acao.volume = 0.3;
  escala3.db3_acao.play();
  if (escala3.db3_acao.play()) {
    nota_x.innerHTML = 'Réb';
    apertado_tecla[1].style.backgroundColor = '#CCC';
    setTimeout(function () {
      apertado_tecla[1].style.backgroundColor = 'black';
    }, 100);
  }
}
function d3_som() {
  escala3.d3_acao.currentTime = 0;
  escala3.d3_acao.volume = 0.3;
  escala3.d3_acao.play();
  if (escala3.d3_acao.play()) {
    nota_x.innerHTML = 'Ré';
    apertado_tecla[2].style.backgroundColor = '#CCC';
    setTimeout(function () {
      apertado_tecla[2].style.backgroundColor = 'white';
    }, 100);
  }
}
function eb3_som() {
  escala3.eb3_acao.currentTime = 0;
  escala3.eb3_acao.volume = 0.3;
  escala3.eb3_acao.play();
  if (escala3.eb3_acao.play()) {
    nota_x.innerHTML = 'Mib';
    apertado_tecla[3].style.backgroundColor = '#CCC';
    setTimeout(function () {
      apertado_tecla[3].style.backgroundColor = 'black';
    }, 100);
  }
}
function e3_som() {
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
function f3_som() {
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
function gb3_som() {
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
function g3_som() {
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
function ab3_som() {
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
function a3_som() {
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
function bb3_som() {
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
function b3_som() {
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
// ESCALA 4  SOM ---------------------------------------------
function c4_som() {
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
function db4_som() {
  escala4.db4_acao.currentTime = 0;
  escala4.db4_acao.volume = 0.3;
  escala4.db4_acao.play();
  if (escala4.db4_acao.play()) {
    nota_x.innerHTML = 'Réb';
    apertado_tecla[13].style.backgroundColor = '#CCC';
    setTimeout(function () {
      apertado_tecla[13].style.backgroundColor = 'black';
    }, 200);
  }
}
function d4_som() {
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
function eb4_som() {
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
function e4_som() {
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
function f4_som() {
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
function gb4_som() {
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
function g4_som() {
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
function ab4_som() {
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
function a4_som() {
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
function bb4_som() {
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
function b4_som() {
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
// ESCALA 5 SOM ---------------------------------------------
function c5_som() {
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
function db5_som() {
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
function d5_som() {
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
function eb5_som() {
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
function e5_som() {
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
function f5_som() {
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
function gb5_som() {
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
function g5_som() {
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
function ab5_som() {
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
function a5_som() {
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
function bb5_som() {
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
function b5_som() {
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