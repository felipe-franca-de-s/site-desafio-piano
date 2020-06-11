window.onload = function(){
    window.onkeypress = function(evento){
        var tecla_codigo;
        var tecla_valor;
        if(window.event){
            tecla_codigo = evento.keyCode;
        }
        tecla_valor = String.fromCharCode(tecla_codigo);

        // ESCALA 3  SOM ---------------------------------------------
        if(tecla_valor == 'z'){
            escala3.g3_acao.currentTime = 0;
            escala3.g3_acao.play();
            if(escala3.g3_acao.play()){
            nota_x.innerHTML = 'Sol';
            }
        }
        if(tecla_valor == 'w'){
            escala3.ab3_acao.currentTime = 0;
            escala3.ab3_acao.play();
            if(escala3.ab3_acao.play()){
                nota_x.innerHTML = 'Láb';
            }
        }
        if(tecla_valor == 'a'){
            escala3.a3_acao.currentTime = 0;
            escala3.a3_acao.play();
            if(escala3.a3_acao.play()){
              nota_x.innerHTML = 'Lá';
            }
        }
        if(tecla_valor == 'e'){
            escala3.bb3_acao.currentTime = 0;
            escala3.bb3_acao.play();
            if(escala3.bb3_acao.play()){
              nota_x.innerHTML = 'Sib';
            }
        }
        if(tecla_valor == 's'){
            escala3.b3_acao.currentTime = 0;
            escala3.b3_acao.play();
            if(escala3.b3_acao.play()){
              nota_x.innerHTML = 'Si';
            }
        }
    
        // ESCALA 4  SOM ---------------------------------------------
        if(tecla_valor == 'd'){
            escala4.c4_acao.currentTime = 0;
            escala4.c4_acao.play();
            if(escala4.c4_acao.play()){
              nota_x.innerHTML = 'Dó';
            }
        }
        if(tecla_valor == 'r'){
            escala4.db4_acao.currentTime = 0;
            escala4.db4_acao.play();
            if(escala4.db4_acao.play()){
              nota_x.innerHTML = 'Réb';
            }
        }
        if(tecla_valor == 'f'){
            escala4.d4_acao.currentTime = 0;
            escala4.d4_acao.play();
            if(escala4.d4_acao.play()){
              nota_x.innerHTML = 'Ré';
            }
        }
        if(tecla_valor == 't'){
            escala4.eb4_acao.currentTime = 0;
            escala4.eb4_acao.play();
            if(escala4.eb4_acao.play()){
              nota_x.innerHTML = 'Mib';
            }
        }
        if(tecla_valor == 'g'){
            escala4.e4_acao.currentTime = 0;
            escala4.e4_acao.play();
            if(escala4.e4_acao.play()){
              nota_x.innerHTML = 'Mi';
            }
        }
        if(tecla_valor == 'h'){
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
    }
}