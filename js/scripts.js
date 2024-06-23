let barraNav = document.getElementById('home')
let idiomaSite = document.getElementById('idioma_site')

let largura = 0 

function barra(){
  largura = window.innerWidth
  console.log(scrollY)

  if(scrollY != 0){
    barraNav.style.borderBottom = '2px solid #e8e6e6'
  } else {
    barraNav.style.borderBottom = '2px solid white'
  }

  if(scrollY >= 485){
    idiomaSite.innerHTML = '<button class="btn btn-success botoes botao_verde pl-4 pr-4" type="button">Comece Agora</button>'
  } else {
    idiomaSite.innerHTML = 'Idioma do site em: Português'
  }

  if(largura > 576){
    
    if(scrollY >= 3325 && scrollY <= 5700){
      barraNav.style.opacity = '0%'
    } else {
      barraNav.style.opacity = '100%'
    }

  } else {

    if(scrollY >= 3810 && scrollY <= 6000){
      barraNav.style.opacity = '0%'
    } else {
      barraNav.style.opacity = '100%'
    }
    
  }
}