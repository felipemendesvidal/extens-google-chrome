// verificar se a pagina esta carregada
document.addEventListener('DOMContentLoaded', function(){

    function iniciar_gmail(){
        window.open("https://mail.google.com/mail/u/1/#inbox", "_blank");
        window.open("https://mail.google.com/mail/u/2/#inbox", "_blank");
        
      }
    
      function iniciar_hot(){
        window.open("https://outlook.live.com/mail/0/", "_blank");
      }
      function iniciar_gather(){
        window.open("https://app.gather.town/app/ALfDbhyl9D5gZNaB/lize", "_blank");
      }
    
      function iniciar_git(){
        window.open("https://www.github.com", "_blank");
      }
      function iniciar_zap(){
        window.open("https://web.whatsapp.com/", "_blank");
      }
    
      function iniciar_xp(){
        window.open("https://online.igti.com.br/", "_blank");
      }

      function iniciar_desc(){
        window.open("https://aulas.descomplica.com.br/graduacao/cst-em-sistemas-para-internet/", "_blank");
      }

      function iniciar_teo(){
        window.open("https://fvc.jacad.com.br/academico/aluno-v2/login", "_blank");
      }

      function iniciar_gpt(){
        window.open("https://chat.openai.com/chat/", "_blank");
      }

      


      //selecionando o botao
      document.querySelector('#abrir_guias').addEventListener('click', function(){
        iniciar_gather();
        iniciar_zap();
        iniciar_gmail();
        iniciar_hot();
        iniciar_git();
      });
      
      document.querySelector('#abrir_guias_estudos').addEventListener('click', function(){
        iniciar_xp();
        iniciar_desc();
        iniciar_teo();
        iniciar_gpt()
      });





});








  