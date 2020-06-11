// NOTAS DECLARADAS NO TECLADO
window.onload = function(){
  window.onkeypress = function(evento){
    var tecla_codigo;
    var tecla_valor;
    if(window.event){
      tecla_codigo = evento.keyCode;
    }
    tecla_valor = String.fromCharCode(tecla_codigo);

    // ESCALA 3  SOM -------------------------------------------------------
    if(tecla_valor == 'q'){
      escala3.c3_acao.currentTime = 0;
      escala3.c3_acao.play();
      if(escala3.c3_acao.play()){
        nota_x.innerHTML = 'Dó';
      }
    }
    if(tecla_valor == '2'){
      escala3.db3_acao.currentTime = 0;
      escala3.db3_acao.play();
      if(escala3.db3_acao.play()){
        nota_x.innerHTML = 'Réb';
      }
    }
    if(tecla_valor == 'w'){
      escala3.d3_acao.currentTime = 0;
      escala3.d3_acao.play();
      if(escala3.d3_acao.play()){
        nota_x.innerHTML = 'Ré';
      }
    }
    if(tecla_valor == '3'){
      escala3.eb3_acao.currentTime = 0;
      escala3.eb3_acao.play();
      if(escala3.eb3_acao.play()){
        nota_x.innerHTML = 'Mib';
      }
    }
    if(tecla_valor == 'e'){
      escala3.e3_acao.currentTime = 0;
      escala3.e3_acao.play();
      if(escala3.e3_acao.play()){
        nota_x.innerHTML = 'Mi';
      }
    }
    if(tecla_valor == 'r'){
      escala3.f3_acao.currentTime = 0;
      escala3.f3_acao.play();
      if(escala3.f3_acao.play()){
        nota_x.innerHTML = 'Fá';
      }
    }
    if(tecla_valor == '5'){
      escala3.gb3_acao.currentTime = 0;
      escala3.gb3_acao.play();
      if(escala3.gb3_acao.play()){
        nota_x.innerHTML = 'Solb';
      }
    }
    if(tecla_valor == 't'){
      escala3.g3_acao.currentTime = 0;
      escala3.g3_acao.play();
      if(escala3.g3_acao.play()){
        nota_x.innerHTML = 'Sol';
      }
    }
    if(tecla_valor == '6'){
      escala3.ab3_acao.currentTime = 0;
      escala3.ab3_acao.play();
      if(escala3.ab3_acao.play()){
          nota_x.innerHTML = 'Láb';
      }
    }
    if(tecla_valor == 'y'){
      escala3.a3_acao.currentTime = 0;
      escala3.a3_acao.play();
      if(escala3.a3_acao.play()){
        nota_x.innerHTML = 'Lá';
      }
    }
    if(tecla_valor == '7'){
      escala3.bb3_acao.currentTime = 0;
      escala3.bb3_acao.play();
      if(escala3.bb3_acao.play()){
        nota_x.innerHTML = 'Sib';
      }
    }
    if(tecla_valor == 'u'){
      escala3.b3_acao.currentTime = 0;
      escala3.b3_acao.play();
      if(escala3.b3_acao.play()){
        nota_x.innerHTML = 'Si';
      }
    }

    // ESCALA 4  SOM -------------------------------------------------------
    if(tecla_valor == 'i'){
      escala4.c4_acao.currentTime = 0;
      escala4.c4_acao.play();
      if(escala4.c4_acao.play()){
        nota_x.innerHTML = 'Dó';
      }
    }
    if(tecla_valor == '9'){
      escala4.db4_acao.currentTime = 0;
      escala4.db4_acao.play();
      if(escala4.db4_acao.play()){
        nota_x.innerHTML = 'Réb';
      }
    }
    if(tecla_valor == 'o'){
      escala4.d4_acao.currentTime = 0;
      escala4.d4_acao.play();
      if(escala4.d4_acao.play()){
        nota_x.innerHTML = 'Ré';
      }
    }
    if(tecla_valor == '0'){
      escala4.eb4_acao.currentTime = 0;
      escala4.eb4_acao.play();
      if(escala4.eb4_acao.play()){
        nota_x.innerHTML = 'Mib';
      }
    }
    if(tecla_valor == 'p'){
      escala4.e4_acao.currentTime = 0;
      escala4.e4_acao.play();
      if(escala4.e4_acao.play()){
        nota_x.innerHTML = 'Mi';
      }
    }
    if(tecla_valor == 'z'){
      escala4.f4_acao.currentTime = 0;
      escala4.f4_acao.play();
      if(escala4.f4_acao.play()){
        nota_x.innerHTML = 'Fá';
      }
    }
    if(tecla_valor == 's'){
      escala4.gb4_acao.currentTime = 0;
      escala4.gb4_acao.play();
      if(escala4.gb4_acao.play()){
        nota_x.innerHTML = 'Solb';
      }
    }
    if(tecla_valor == 'x'){
      escala4.g4_acao.currentTime = 0;
      escala4.g4_acao.play();
      if(escala4.g4_acao.play()){
        nota_x.innerHTML = 'Sol';
      }
    }
    if(tecla_valor == 'd'){
      escala4.ab4_acao.currentTime = 0;
      escala4.ab4_acao.play();
      if(escala4.ab4_acao.play()){
        nota_x.innerHTML = 'Láb';
      }
    }
    if(tecla_valor == 'c'){
      escala4.a4_acao.currentTime = 0;
      escala4.a4_acao.play();
      if(escala4.a4_acao.play()){
        nota_x.innerHTML = 'Lá';
      }
    }
    if(tecla_valor == 'f'){
      escala4.bb4_acao.currentTime = 0;
      escala4.bb4_acao.play();
      if(escala4.bb4_acao.play()){
        nota_x.innerHTML = 'Sib';
      }
    }
    if(tecla_valor == 'v'){
      escala4.b4_acao.currentTime = 0;
      escala4.b4_acao.play();
      if(escala4.b4_acao.play()){
        nota_x.innerHTML = 'Si';
      }
    }
    // ESCALA 5  SOM -------------------------------------------------------
    if(tecla_valor == 'b'){
      escala5.c5_acao.currentTime = 0;
      escala5.c5_acao.play();
      if(escala5.c5_acao.play()){
        nota_x.innerHTML = 'Dó';
      }
    }
    if(tecla_valor == 'h'){
      escala5.db5_acao.currentTime = 0;
      escala5.db5_acao.play();
      if(escala5.db5_acao.play()){
        nota_x.innerHTML = 'Réb';
      }
    }
    if(tecla_valor == 'n'){
      escala5.d5_acao.currentTime = 0;
      escala5.d5_acao.play();
      if(escala5.d5_acao.play()){
        nota_x.innerHTML = 'Ré';
      }
    }
    if(tecla_valor == 'j'){
      escala5.eb5_acao.currentTime = 0;
      escala5.eb5_acao.play();
      if(escala5.eb5_acao.play()){
        nota_x.innerHTML = 'Mib';
      }
    }
    if(tecla_valor == 'm'){
      escala5.e5_acao.currentTime = 0;
      escala5.e5_acao.play();
      if(escala5.e5_acao.play()){
        nota_x.innerHTML = 'Mi';
      }
    }
    if(tecla_valor == ','){
      escala5.f5_acao.currentTime = 0;
      escala5.f5_acao.play();
      if(escala5.f5_acao.play()){
        nota_x.innerHTML = 'Fá';
      }
    }
    if(tecla_valor == 'l'){
      escala5.gb5_acao.currentTime = 0;
      escala5.gb5_acao.play();
      if(escala5.gb5_acao.play()){
        nota_x.innerHTML = 'Solb';
      }
    }
    if(tecla_valor == '.'){
      escala5.g5_acao.currentTime = 0;
      escala5.g5_acao.play();
      if(escala5.g5_acao.play()){
        nota_x.innerHTML = 'Sol';
      }
    }
    if(tecla_valor == 'ç'){
      escala5.ab5_acao.currentTime = 0;
      escala5.ab5_acao.play();
      if(escala5.ab5_acao.play()){
        nota_x.innerHTML = 'Láb';
      }
    }
    if(tecla_valor == ';'){
      escala5.a5_acao.currentTime = 0;
      escala5.a5_acao.play();
      if(escala5.a5_acao.play()){
        nota_x.innerHTML = 'Lá';
      }
    }
    if(tecla_valor == ']'){
      escala5.bb5_acao.currentTime = 0;
      escala5.bb5_acao.play();
      if(escala5.bb5_acao.play()){
        nota_x.innerHTML = 'Sib';
      }
    }
    if(tecla_valor == '/'){
      escala5.b5_acao.currentTime = 0;
      escala5.b5_acao.play();
      if(escala5.b5_acao.play()){
        nota_x.innerHTML = 'Si';
      }
    }
  }
}