// ESCOLHER JOGO
function ver_piano_virtual() {
  piano_vitual.style.display = 'block';
  adivinhe_som.style.display = 'none';
}
function ver_adivinhe_som() {
  piano_vitual.style.display = 'none';
  adivinhe_som.style.display = 'block';
}
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
    // PLAY TECLA
    escala3.c3_acao.play();
    // NOME TECLA
    if(escala3.c3_acao.play()){
      nota_x.innerHTML = 'Dó';
    }
}
function db3_som() {
    escala3.db3_acao.currentTime = 0;
    escala3.db3_acao.play();
    if(escala3.db3_acao.play()){
      nota_x.innerHTML = 'Réb';
    }
}
function d3_som() {
    escala3.d3_acao.currentTime = 0;
    escala3.d3_acao.play();
    if(escala3.d3_acao.play()){
      nota_x.innerHTML = 'Ré';
    }
}
function eb3_som() {
    escala3.eb3_acao.currentTime = 0;
    escala3.eb3_acao.play();
    if(escala3.eb3_acao.play()){
      nota_x.innerHTML = 'Mib';
    }
}
function e3_som() {
    escala3.e3_acao.currentTime = 0;
    escala3.e3_acao.play();
    if(escala3.e3_acao.play()){
      nota_x.innerHTML = 'Mi';
    }
}
function f3_som() {
    escala3.f3_acao.currentTime = 0;
    escala3.f3_acao.play();
    if(escala3.f3_acao.play()){
      nota_x.innerHTML = 'Fá';
    }
}
function gb3_som() {
    escala3.gb3_acao.currentTime = 0;
    escala3.gb3_acao.play();
    if(escala3.gb3_acao.play()){
      nota_x.innerHTML = 'Solb';
    }
}
function g3_som() {
    escala3.g3_acao.currentTime = 0;
    escala3.g3_acao.play();
    if(escala3.g3_acao.play()){
      nota_x.innerHTML = 'Sol';
    }
}
function ab3_som() {
    escala3.ab3_acao.currentTime = 0;
    escala3.ab3_acao.play();
    if(escala3.ab3_acao.play()){
      nota_x.innerHTML = 'Láb';
    }
}
function a3_som() {
    escala3.a3_acao.currentTime = 0;
    escala3.a3_acao.play();
    if(escala3.a3_acao.play()){
      nota_x.innerHTML = 'Lá';
    }
}
function bb3_som() {
    escala3.bb3_acao.currentTime = 0;
    escala3.bb3_acao.play();
    if(escala3.bb3_acao.play()){
      nota_x.innerHTML = 'Sib';
    }
}
function b3_som() {
    escala3.b3_acao.currentTime = 0;
    escala3.b3_acao.play();
    if(escala3.b3_acao.play()){
      nota_x.innerHTML = 'Si';
    }
}
// ESCALA 4  SOM ---------------------------------------------
function c4_som() {
  escala4.c4_acao.currentTime = 0;
  escala4.c4_acao.play();
  if(escala4.c4_acao.play()){
    nota_x.innerHTML = 'Dó';
  }
}
function db4_som() {
  escala4.db4_acao.currentTime = 0;
  escala4.db4_acao.play();
  if(escala4.db4_acao.play()){
    nota_x.innerHTML = 'Réb';
  }
}
function d4_som() {
  escala4.d4_acao.currentTime = 0;
  escala4.d4_acao.play();
  if(escala4.d4_acao.play()){
    nota_x.innerHTML = 'Ré';
  }
}
function eb4_som() {
  escala4.eb4_acao.currentTime = 0;
  escala4.eb4_acao.play();
  if(escala4.eb4_acao.play()){
    nota_x.innerHTML = 'Mib';
  }
}
function e4_som() {
  escala4.e4_acao.currentTime = 0;
  escala4.e4_acao.play();
  if(escala4.e4_acao.play()){
    nota_x.innerHTML = 'Mi';
  }
}
function f4_som() {
  escala4.f4_acao.currentTime = 0;
  escala4.f4_acao.play();
  if(escala4.f4_acao.play()){
    nota_x.innerHTML = 'Fá';
  }
}
function gb4_som() {
  escala4.gb4_acao.currentTime = 0;
  escala4.gb4_acao.play();
  if(escala4.gb4_acao.play()){
    nota_x.innerHTML = 'Solb';
  }
}
function g4_som() {
  escala4.g4_acao.currentTime = 0;
  escala4.g4_acao.play();
  if(escala4.g4_acao.play()){
    nota_x.innerHTML = 'Sol';
  }
}
function ab4_som() {
  escala4.ab4_acao.currentTime = 0;
  escala4.ab4_acao.play();
  if(escala4.ab4_acao.play()){
    nota_x.innerHTML = 'Láb';
  }
}
function a4_som() {
  escala4.a4_acao.currentTime = 0;
  escala4.a4_acao.play();
  if(escala4.a4_acao.play()){
    nota_x.innerHTML = 'Lá';
  }
}
function bb4_som() {
  escala4.bb4_acao.currentTime = 0;
  escala4.bb4_acao.play();
  if(escala4.bb4_acao.play()){
    nota_x.innerHTML = 'Sib';
  }
}
function b4_som() {
  escala4.b4_acao.currentTime = 0;
  escala4.b4_acao.play();
  if(escala4.b4_acao.play()){
    nota_x.innerHTML = 'Si';
  }
}
// ESCALA 5 SOM ---------------------------------------------
function c5_som() {
  escala5.c5_acao.currentTime = 0;
  escala5.c5_acao.play();
  if(escala5.c5_acao.play()){
    nota_x.innerHTML = 'Dó';
  }
}
function db5_som() {
  escala5.db5_acao.currentTime = 0;
  escala5.db5_acao.play();
  if(escala5.db5_acao.play()){
    nota_x.innerHTML = 'Réb';
  }
}
function d5_som() {
  escala5.d5_acao.currentTime = 0;
  escala5.d5_acao.play();
  if(escala5.d5_acao.play()){
    nota_x.innerHTML = 'Ré';
  }
}
function eb5_som() {
  escala5.eb5_acao.currentTime = 0;
  escala5.eb5_acao.play();
  if(escala5.eb5_acao.play()){
    nota_x.innerHTML = 'Mib';
  }
}
function e5_som() {
  escala5.e5_acao.currentTime = 0;
  escala5.e5_acao.play();
  if(escala5.e5_acao.play()){
    nota_x.innerHTML = 'Mi';
  }
}
function f5_som() {
  escala5.f5_acao.currentTime = 0;
  escala5.f5_acao.play();
  if(escala5.f5_acao.play()){
    nota_x.innerHTML = 'Fá';
  }
}
function gb5_som() {
  escala5.gb5_acao.currentTime = 0;
  escala5.gb5_acao.play();
  if(escala5.gb5_acao.play()){
    nota_x.innerHTML = 'Solb';
  }
}
function g5_som() {
  escala5.g5_acao.currentTime = 0;
  escala5.g5_acao.play();
  if(escala5.g5_acao.play()){
    nota_x.innerHTML = 'Sol';
  }
}
function ab5_som() {
  escala5.ab5_acao.currentTime = 0;
  escala5.ab5_acao.play();
  if(escala5.ab5_acao.play()){
    nota_x.innerHTML = 'Láb';
  }
}
function a5_som() {
  escala5.a5_acao.currentTime = 0;
  escala5.a5_acao.play();
  if(escala5.a5_acao.play()){
    nota_x.innerHTML = 'Lá';
  }
}
function bb5_som() {
  escala5.bb5_acao.currentTime = 0;
  escala5.bb5_acao.play();
  if(escala5.bb5_acao.play()){
    nota_x.innerHTML = 'Sib';
  }
}
function b5_som() {
  escala5.b5_acao.currentTime = 0;
  escala5.b5_acao.play();
  if(escala5.b5_acao.play()){
    nota_x.innerHTML = 'Si';
  }
}