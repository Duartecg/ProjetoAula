function toggleMode(){
  
  
  const html = document.documentElement
  html.classList.toggle("light")
//pegando a tag img
const img = document.querySelector("#profile img")
const alt = document.querySelector("#profile img")


  if(html.classList.contains('light')){
    img.setAttribute('src','./assets/avatar-light.png')
    alt.setAttribute('alt',"versão foto tema light")
  } else {
    img.setAttribute('src','./assets/avatar.png')
    alt.setAttribute('alt', 'versão foto tema escuro')
  }
  //pegar a tag image, depois substituir a imagem
  //se tover light mode adicionar a img light
  //se tiver sem light mode manter a img atual
}