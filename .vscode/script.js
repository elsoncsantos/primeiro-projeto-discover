function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag imagem
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "com óculos escuros")
  } else {
    // se tive sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "sem oculos")
  }
}
