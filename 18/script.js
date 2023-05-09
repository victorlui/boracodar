let gallery = [
  {
    nome: "Rey Skywalker",
    descricao:
      "Era uma catadora de sucata que descobriu ser sensível à Força durante sua busca ao lendário Mestre Jedi Luke Skywalker.",
    filmes:
      "Star Wars: O Despertar da Força Star Wars: Os Últimos Jedi & Star Wars: A Ascensão Skywalker",
    especie: "Humana",
    altura: "1,7m",
    localidade: "Jakku",
    armas: "Sabre de luz, Blaster, Quarterstaff",
    img: "./assets/Character.png",
    id: "rey",
  },
  {
    nome: "BB-8",
    descricao:
      "É um robô esférico com movimentação livre de sua cabeça em formato de domo, com inteligência artificial consegue se comunicar com quase todas as espécies da galáxia inclusive humanos.",
    filmes:
      "Star Wars: O Despertar da Força Star Wars: Os Últimos Jedi & Star Wars: A Ascensão Skywalker",
    especie: "Droide Astromecânico",
    altura: "0,67m",
    localidade: "Hosnian Prime",
    armas: "Lançador de cabo liquido",
    img: "./assets/bb08.png",
    id: "bb8",
  },
  {
    nome: "FINN",
    descricao: "Um guerreiro treinado e desesperado para fugir do seu passado",
    filmes:
      "Star Wars: O Despertar da Força Star Wars: Os Últimos Jedi Star Wars: A Ascensão Skywalker",
    especie: "Humano",
    altura: "1,78m",
    localidade: "Jakku",
    armas: "Sabre de luz, Blaster, Quarterstaff",
    img: "./assets/finn.webp",
    id: "finn",
  },
]

let mainGallery = 0
let prevGallery = gallery.length - 1
let nextGallery = 1

function render(gallery) {
  let output = ""

  output += `<div class="box">
      <img src="${gallery.img}" id=${gallery.id} />
   
    
      <header>
        <h1>${gallery.nome}</h1>
        <p>
          ${gallery.descricao}
        </p>
      </header>

      <main>
        <div>
          <span> Filmes </span>
          <p>
             ${gallery.filmes}
          </p>
        </div>
        <div>
          <span> Espécie </span>
          <p> ${gallery.especie}</p>
        </div>
        <div>
          <span> Altura </span>
          <p>${gallery.altura}</p>
        </div>
        <div>
          <span> Localidade </span>
          <p>${gallery.localidade}</p>
        </div>
        <div>
          <span> Armas </span>
          <p>${gallery.armas}</p>
        </div>
      </main>
    
    </div>`

  return output
}

function loadGallery() {
  let mainView = document.getElementById("mainView")
  mainView.innerHTML = render(gallery[mainGallery])

  let leftView = document.getElementById("leftView")
  leftView.innerHTML = gallery[prevGallery].nome

  let rightView = document.getElementById("rightView")
  rightView.innerHTML = gallery[nextGallery].nome

  let linkTag = document.getElementById("linkTag")
  linkTag.href = gallery[mainGallery]
}

function scrollRight() {
  prevGallery = mainGallery
  mainGallery = nextGallery
  if (nextGallery >= gallery.length - 1) {
    nextGallery = 0
  } else {
    nextGallery++
    mainView.style.animation = "btn-pisca .9s linear"
  }
  loadGallery()
}

function scrollLeft() {
  nextGallery = mainGallery
  mainGallery = prevGallery

  if (prevGallery === 0) {
    prevGallery = gallery.length - 1
  } else {
    prevGallery--
    mainView.style.animation = "btn-pisca .9s linear"
  }
  loadGallery()
}

document.getElementById("navRight").addEventListener("click", scrollRight)
document.getElementById("navLeft").addEventListener("click", scrollLeft)
document.getElementById("rightView").addEventListener("click", scrollRight)
document.getElementById("leftView").addEventListener("click", scrollLeft)

loadGallery()
