// teclas declaradas
const do_acao = document.getElementById("do"); 
const do_s_acao = document.getElementById("do#"); 
const re_acao = document.getElementById("re"); 
const re_s_acao = document.getElementById("re#"); 
const mi_acao = document.getElementById("mi"); 
const fa_acao = document.getElementById("fa"); 
const fa_s_acao = document.getElementById("fa#"); 
const sol_acao = document.getElementById("sol"); 
const sol_s_acao = document.getElementById("sol#"); 
const la_acao = document.getElementById("la"); 
const la_s_acao = document.getElementById("la#"); 
const si_acao = document.getElementById("si");

// const keys = document.querySelectorAll('.key')

// keys.forEach(key => {
//   key.addEventListener('click', () => playNote(key))
// })

// function playNote(key) {
//   const noteAudio = document.getElementById(key.dataset.note)
//   noteAudio.currentTime = 0
//   noteAudio.play()
//   key.classList.add('active')
//   noteAudio.addEventListener('ended', () => {
//     key.classList.remove('active')
//   })
// }
function do_apertado(){
  // zerar som da tecla
  do_acao.currentTime = 0;
  // play tecla
  do_acao.play();
}

function do_toque() {
  // zerar som da tecla
  do_acao.currentTime = 0;
  // play tecla
  do_acao.play();
}
function do_s_toque() {
  do_s_acao.currentTime = 0;
  do_s_acao.play();
}
function re_toque() {
  re_acao.currentTime = 0;
  re_acao.play();
}
function re_s_toque() {
  re_s_acao.currentTime = 0;
  re_s_acao.play();
}
function mi_toque() {
  mi_acao.currentTime = 0;
  mi_acao.play();
}
function fa_toque() {
  fa_acao.currentTime = 0;
  fa_acao.play();
}
function fa_s_toque() {
  fa_s_acao.currentTime = 0;
  fa_s_acao.play();
}
function sol_toque() {
  sol_acao.currentTime = 0;
  sol_acao.play();
}
function sol_s_toque() {
  sol_s_acao.currentTime = 0;
  sol_s_acao.play();
}
function la_toque() {
  la_acao.currentTime = 0;
  la_acao.play();
}
function la_s_toque() {
  la_s_acao.currentTime = 0;
  la_s_acao.play();
}
function si_toque() {
  si_acao.currentTime = 0;
  si_acao.play();
}
