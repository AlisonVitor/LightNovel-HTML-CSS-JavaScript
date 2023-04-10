
    click= 0;
    click2 = 0;
    click3 = 0;
    clickFechar= 0;
    clickEntrarNaCabana =0;
    clickcaminhocabana =0;
    clickOlharEmVolta = 0;
    clicksbotaoSeguirTrilha = 0;
    clicksbotaoSeguirBrisa = 0;
    clickcena2= 0
    clickLivro= 0
    clickPorta= 0
  
    const botaoOlharEmVolta = document.getElementById("BotaoOlharEmVolta");
    const botaoFechar = document.getElementById("BotaoFechar");
    const botaoSeguirTrilha = document.getElementById("BotaoSeguirTrilha");
    const botaoSeguirBrisa = document.getElementById("BotaoSeguirBrisa");
    const BotaoEntrarNaCasa = document.getElementById("BotaoEntrarNaCasa");
    const BotaoDarmeiaVolta = document.getElementById("BotaoDarmeiaVolta");
    const BotaoEsconder = document.getElementById("BotaoEsconder");
    const BotaoIniciar = document.getElementById('ButtonIniciar');
    const JanelaAlerta = document.getElementById("custom-alert");
    const BotaoLivro1 = document.getElementById("Livro1");
    const BotaoPorta1 = document.getElementById("Porta1");
    var texto1 = document.querySelector(".texto1");
    const corpo1 = document.querySelector(".corpo");
    const corpo2 = document.querySelector(".corpo2");
    const npc = document.querySelector(".npc");
    var texto1 = document.querySelector(".texto1");


  function CaixaAlerta() {
      JanelaAlerta.style.display = "block";
      botaoFechar.classList.remove("botaoinvisivel")
}
  function MenuIniciar(){
    BotaoIniciar.addEventListener("click", () => {
      click++;
  
      if(click == 1) {
     corpo1.style.display = 'none';
     corpo2.style.display = 'block';
  
     }
   });
}

  function PersonagemAcordando(){ 
    corpo2.addEventListener("click", () => {
      click2++;

     if(click2 == 1) {  
      texto1.classList.add('animacao-texto');
      texto1.innerHTML = '......... ........';
    
      
     }
     if(click2 == 2) {
      texto1.classList.add('animacao-texto');
      texto1.innerHTML = '.......... ....... ';
   
     }
     if(click2 == 3) {
      texto1.classList.add('animacao-texto');
      
      texto1.innerHTML = 'Você abre os olhos e se vê em um ambiente estranho e desconhecido. Tudo em volta está envolto em uma densa névoa que impede a visibilidade além de poucos metros à sua frente. Aos poucos, você percebe que está em uma floresta bizarra, com árvores retorcidas e cobertas de musgo e líquens, algumas delas parecem ter sido arrancadas do solo e se erguem em ângulos estranhos.';
      corpo2.style.backgroundImage = 'url(src/Cenario2.png)';
      corpo2.style.backgroundPosition = 'center center';
      corpo2.style.backgroundRepeat = 'no-repeat';
     
     }
     if(click2 == 4) {
      texto1.classList.add('animacao-texto');
      texto1.innerHTML = 'A atmosfera do lugar é opressiva, como se algo estivesse espreitando você de todos os lados.Enquanto tenta se orientar, você nota que há marcas no chão, como se alguém ou algo tivesse passado por ali recentemente. As marcas parecem levar a uma trilha estreita que se adentra na floresta. ';
      botaoOlharEmVolta.classList.remove("botaoinvisivel")
      
     }


  });
}
 
 function PersonagemOlhandoEmVolta(){
  botaoOlharEmVolta.addEventListener("click", () => {
  clickOlharEmVolta++;

  if(clickOlharEmVolta == 1) {

  texto1.innerHTML = 'Olhando em volta, você percebe que além das misteriosas marcas no chão, uma brisa mais calma parece soprar de uma direção específica. Você sente o ar se mover suavemente em seu rosto, como se alguém ou algo estivesse guiando você. À medida que presta atenção à brisa, você percebe que ela parece vir de uma trilha estreita que serpenteia pela floresta bizarra. A trilha parece um pouco menos opressiva do que o resto da floresta, e você tem a sensação de que seguir por ali pode ser a melhor opção.';
  botaoOlharEmVolta.classList.add("botaoinvisivel")
  texto1.classList.add('animacao-texto');
  texto1.innerHTML = 'Olhando em volta, você percebe que além das misteriosas marcas no chão, uma brisa mais calma parece soprar de uma direção específica. Você sente o ar se mover suavemente em seu rosto, como se alguém ou algo estivesse guiando você. À medida que presta atenção à brisa, você percebe que ela parece vir de uma trilha estreita que serpenteia pela floresta bizarra. A trilha parece um pouco menos opressiva do que o resto da floresta, e você tem a sensação de que seguir por ali pode ser a melhor opção.';
  botaoSeguirBrisa.classList.remove("botaoinvisivel")
  botaoSeguirTrilha.classList.remove("botaoinvisivel")
  corpo2.style.backgroundImage = 'url(src/Cenario1.png)';
  corpo2.style.backgroundPosition = 'center center';
  corpo2.style.backgroundRepeat = 'no-repeat';

}
})
}

function SeguirTrilha(){
  botaoSeguirTrilha.addEventListener("click", () => {
    clicksbotaoSeguirTrilha++;

      if(clicksbotaoSeguirTrilha == 1) {

        texto1.innerHTML = 'Você continua seguindo as marcas no chão, com a neblina cada vez mais densa. A sensação de desconforto e medo aumenta a cada passo, como se algo estivesse te observando, espreitando entre as árvores da floresta. Você começa a sentir uma sensação estranha, como se a neblina estivesse tentando se aproximar de você, como se estivesse tentando te envolver e te impedir de continuar. É quase como se fosse uma força viva, uma entidade que está presente em todo lugar ao seu redor.';
          botaoSeguirTrilha.classList.add("botaoinvisivel")
          botaoSeguirBrisa.classList.add("botaoinvisivel")
          corpo2.style.backgroundImage = 'url(src/floresta2.png)';
          corpo2.style.backgroundPosition = 'center center';
          corpo2.style.backgroundRepeat = 'no-repeat';
  

  corpo2.addEventListener("click", () => {
  click3++;

    if(click3 == 1) {

      texto1.innerHTML = 'Você continua seguindo as marcas no chão, com a neblina cada vez mais densa. A sensação de desconforto e medo aumenta a cada passo, como se algo estivesse te observando, espreitando entre as árvores da floresta. Você começa a sentir uma sensação estranha, como se a neblina estivesse tentando se aproximar de você, como se estivesse tentando te envolver e te impedir de continuar. É quase como se fosse uma força viva, uma entidade que está presente em todo lugar ao seu redor.';
        botaoSeguirTrilha.classList.add("botaoinvisivel")
        botaoSeguirBrisa.classList.add("botaoinvisivel")
        corpo2.style.backgroundImage = 'url(src/floresta2.png)';
        corpo2.style.backgroundPosition = 'center center';
        corpo2.style.backgroundRepeat = 'no-repeat';
      }

      if(click3 == 2) {

        texto1.innerHTML = 'A cada passo, você sente como se estivesse se afastando do que é conhecido e se adentrando em um lugar desconhecido, onde o perigo espreita em cada sombra. O medo começa a consumir seus pensamentos e você se pergunta se será capaz de sair dali com vida. A névoa parece menos densa agora. Você luta para avançar, mas é como se algo invisível estivesse te puxando para trás. É uma sensação aterrorizante de estar preso em uma teia invisível e não ser capaz de escapar.';
          botaoSeguirTrilha.classList.add("botaoinvisivel")
          botaoSeguirBrisa.classList.add("botaoinvisivel")
          corpo2.style.backgroundImage = 'url(src/floresta3.png)';
          corpo2.style.backgroundPosition = 'center center';
          corpo2.style.backgroundRepeat = 'no-repeat';
        }



    })
      }
      });
  
  }

function SeguirCaminhoSeguro(){
  botaoSeguirBrisa.addEventListener("click", () => {
  clicksbotaoSeguirBrisa++;

  if(clicksbotaoSeguirBrisa == 1) {

  texto1.innerHTML = 'Seguindo o caminho considerado mais seguro, você finalmente avista uma velha casa no meio da neblina densa. A aparência da casa é assustadora e decadente, com janelas quebradas e portas rangendo ao vento. Apesar da sensação de desconforto, você sente que é a única chance de encontrar um lugar seguro para se abrigar da neblina. Você se aproxima cautelosamente da casa, sentindo os olhos do desconhecido te observando.';
  botaoSeguirBrisa.classList.add("botaoinvisivel")
  botaoSeguirTrilha.classList.add("botaoinvisivel")
  corpo2.style.backgroundImage = 'url(src/Cabana.png)';
  corpo2.style.backgroundPosition = 'center center';
  corpo2.style.backgroundRepeat = 'no-repeat';
  }
 

  corpo2.addEventListener("click", () => {
    clickcaminhocabana++;
  
   if(clickcaminhocabana == 1) {  
    texto1.classList.add('animacao-texto');
    texto1.innerHTML = 'Seguindo o caminho considerado mais seguro, você finalmente avista uma velha casa no meio da neblina densa. A aparência da casa é assustadora e decadente, com janelas quebradas e portas rangendo ao vento. Apesar da sensação de desconforto, você sente que é a única chance de encontrar um lugar seguro para se abrigar da neblina. Você se aproxima cautelosamente da casa, sentindo os olhos do desconhecido te observando.';
  
    
   }

   if(clickcaminhocabana == 2) {
    texto1.classList.add('animacao-texto');
    texto1.innerHTML = 'Devo entrar na casa ?';
    BotaoEntrarNaCasa.classList.remove("botaoinvisivel");
    BotaoDarmeiaVolta.classList.remove("botaoinvisivel");
   }
  })
})
}
 
function EntrarNaCasa() {
    BotaoEntrarNaCasa.addEventListener("click", () => {
      clickEntrarNaCabana++;
    
     if(clickEntrarNaCabana == 1) {  
      texto1.classList.add('animacao-texto');
      texto1.innerHTML = 'Ao entrar na casa, você sente uma leve tranquilidade. A neblina não atravessa as paredes, e mesmo com a porta aberta, ela não parece ter interesse em entrar. Você percebe que a casa aparenta estar abandonada há um bom tempo, mas algo ainda parece estar vivo dentro dela.';
      corpo2.style.backgroundImage = 'url(src/InteriorCabana.png)';
      corpo2.style.backgroundPosition = 'center center';
      corpo2.style.backgroundRepeat = 'no-repeat';
      BotaoEntrarNaCasa.classList.add("botaoinvisivel");
      BotaoDarmeiaVolta.classList.add("botaoinvisivel");
      CaixaAlerta();

   
    }
  })
}

function DentroDaCabana(){
botaoFechar.addEventListener("click", () => {
      clickFechar++;
      if(clickFechar == 1) {
        JanelaAlerta.style.display = "none";
        BotaoLivro1.style.display = 'block'
        BotaoPorta1.style.display = 'block'

            BotaoLivro1.addEventListener("click", () => {
            clickLivro++;
            if(clickLivro == 1) {
              texto1.innerHTML = 'Um livro estranho, não consigo entender direito o que tem escrito, mas sinto calafrios só de olhar para ele. Melhor deixar isso aqui';

           
        }
      })
      BotaoPorta1.addEventListener("click", () => {
        clickPorta++;
        if(clickPorta == 1) {
          texto1.innerHTML = 'Melhor eu sair daqui, antes que alguem volte';
          corpo2.style.backgroundImage = 'url(src/Cabana.png)';
          corpo2.style.backgroundPosition = 'center center';
          corpo2.style.backgroundRepeat = 'no-repeat';
          BotaoPorta1.style.display = 'none'
          BotaoLivro1.style.display = 'none'
          BotaoDarmeiaVolta.classList.remove("botaoinvisivel");
          BotaoEsconder.classList.remove("botaoinvisivel");
        }
  })
    }
    });

}
 
EntrarNaCasa();
SeguirCaminhoSeguro();
SeguirTrilha();
MenuIniciar();
PersonagemAcordando();
PersonagemOlhandoEmVolta();
DentroDaCabana();