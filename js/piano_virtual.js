// // TECLAS DECLARADAS
// const escala0 = {
//     a0_acao: document.getElementById("a0"), 
//     bb0_acao: document.getElementById("bb0"), 
//     b0_acao: document.getElementById("b0")
// }

// const escala1 = {
//     c1_acao: document.getElementById("c1"), 
//     db1_acao: document.getElementById("db1"), 
//     d1_acao: document.getElementById("d1"), 
//     eb1_acao: document.getElementById("eb1"), 
//     e1_acao: document.getElementById("e1"), 
//     f1_acao: document.getElementById("f1"), 
//     gb1_acao: document.getElementById("gb1"), 
//     g1_acao: document.getElementById("g1"), 
//     ab1_acao: document.getElementById("ab1"), 
//     a1_acao: document.getElementById("a1"), 
//     bb1_acao: document.getElementById("bb1"), 
//     b1_acao: document.getElementById("b1")
// }

// const escala2 = {
//     c2_acao: document.getElementById("c2"), 
//     db2_acao: document.getElementById("db2"), 
//     d2_acao: document.getElementById("d2"), 
//     eb2_acao: document.getElementById("eb2"), 
//     e2_acao: document.getElementById("e2"), 
//     f2_acao: document.getElementById("f2"), 
//     gb2_acao: document.getElementById("gb2"), 
//     g2_acao: document.getElementById("g2"), 
//     ab2_acao: document.getElementById("ab2"), 
//     a2_acao: document.getElementById("a2"), 
//     bb2_acao: document.getElementById("bb2"), 
//     b2_acao: document.getElementById("b2")
// }

// const escala3 = {
//     c3_acao: document.getElementById("c3"), 
//     db3_acao: document.getElementById("db3"), 
//     d3_acao: document.getElementById("d3"), 
//     eb3_acao: document.getElementById("eb3"), 
//     e3_acao: document.getElementById("e3"), 
//     f3_acao: document.getElementById("f3"), 
//     gb3_acao: document.getElementById("gb3"), 
//     g3_acao: document.getElementById("g3"), 
//     ab3_acao: document.getElementById("ab3"), 
//     a3_acao: document.getElementById("a3"), 
//     bb3_acao: document.getElementById("bb3"), 
//     b3_acao: document.getElementById("b3")
// }

// const escala4 = {
//     c4_acao: document.getElementById("c4"), 
//     db4_acao: document.getElementById("db4"), 
//     d4_acao: document.getElementById("d4"), 
//     eb4_acao: document.getElementById("eb4"), 
//     e4_acao: document.getElementById("e4"), 
//     f4_acao: document.getElementById("f4"), 
//     gb4_acao: document.getElementById("gb4"), 
//     g4_acao: document.getElementById("g4"), 
//     ab4_acao: document.getElementById("ab4"), 
//     a4_acao: document.getElementById("a4"), 
//     bb4_acao: document.getElementById("bb4"), 
//     b4_acao: document.getElementById("b4")
// }

// const escala5 = {
//     c5_acao: document.getElementById("c5"), 
//     db5_acao: document.getElementById("db5"), 
//     d5_acao: document.getElementById("d5"), 
//     eb5_acao: document.getElementById("eb5"), 
//     e5_acao: document.getElementById("e5"), 
//     f5_acao: document.getElementById("f5"), 
//     gb5_acao: document.getElementById("gb5"), 
//     g5_acao: document.getElementById("g5"), 
//     ab5_acao: document.getElementById("ab5"), 
//     a5_acao: document.getElementById("a5"), 
//     bb5_acao: document.getElementById("bb5"), 
//     b5_acao: document.getElementById("b5")
// }

// const escala6 = {
//     c6_acao: document.getElementById("c6"), 
//     db6_acao: document.getElementById("db6"), 
//     d6_acao: document.getElementById("d6"), 
//     eb6_acao: document.getElementById("eb6"), 
//     e6_acao: document.getElementById("e6"), 
//     f6_acao: document.getElementById("f6"), 
//     gb6_acao: document.getElementById("gb6"), 
//     g6_acao: document.getElementById("g6"), 
//     ab6_acao: document.getElementById("ab6"), 
//     a6_acao: document.getElementById("a6"), 
//     bb6_acao: document.getElementById("bb6"), 
//     b6_acao: document.getElementById("b6")
// }

// const escala7 = {
//     c7_acao: document.getElementById("c7"), 
//     db7_acao: document.getElementById("db7"), 
//     d7_acao: document.getElementById("d7"), 
//     eb7_acao: document.getElementById("eb7"), 
//     e7_acao: document.getElementById("e7"), 
//     f7_acao: document.getElementById("f7"), 
//     gb7_acao: document.getElementById("gb7"), 
//     g7_acao: document.getElementById("g7"), 
//     ab7_acao: document.getElementById("ab7"), 
//     a7_acao: document.getElementById("a7"), 
//     bb7_acao: document.getElementById("bb7"), 
//     b7_acao: document.getElementById("b7")
// }

// const escala8 = {
//     c8_acao: document.getElementById("c8")
// }


const keys = document.querySelectorAll('.key')

keys.forEach(key => {
  key.addEventListener('click', () => tocarNota(key))
})

function tocarNota(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
//   key.classList.add('active');
//   noteAudio.addEventListener('ended', () => {
//     key.classList.remove('active')
  });
}




// // ESCALA 3
// function c3_som() {
//     // ZERAR SOM TECLA
//     escala3.c3_acao.currentTime = 0;
//     // PLAY TECLA
//     escala3.c3_acao.play();
// }
// function db3_som() {
//     escala3.db3_acao.currentTime = 0;
//     escala3.db3_acao.play();
// }
// function d3_som() {
//     escala3.d3_acao.currentTime = 0;
//     escala3.d3_acao.play();
// }
// function eb3_som() {
//     escala3.eb3_acao.currentTime = 0;
//     escala3.eb3_acao.play();
// }
// function e3_som() {
//     escala3.e3_acao.currentTime = 0;
//     escala3.e3_acao.play();
// }
// function f3_som() {
//     escala3.f3_acao.currentTime = 0;
//     escala3.f3_acao.play();
// }
// function gb3_som() {
//     escala3.gb3_acao.currentTime = 0;
//     escala3.gb3_acao.play();
// }
// function g3_som() {
//     escala3.g3_acao.currentTime = 0;
//     escala3.g3_acao.play();
// }
// function ab3_som() {
//     escala3.ab3_acao.currentTime = 0;
//     escala3.ab3_acao.play();
// }
// function a3_som() {
//     escala3.a3_acao.currentTime = 0;
//     escala3.a3_acao.play();
// }
// function bb3_som() {
//     escala3.bb3_acao.currentTime = 0;
//     escala3.bb3_acao.play();
// }
// function bb3_som() {
//     escala3.bb3_acao.currentTime = 0;
//     escala3.bb3_acao.play();
// }
// function b3_som() {
//     escala3.b3_acao.currentTime = 0;
//     escala3.b3_acao.play();
// }