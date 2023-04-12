const inputElement = document.getElementById("arquivo")
const container = document.getElementById("list-files")
let data = []
var progress = 0

inputElement.addEventListener("change", handleFiles, false)

function handleFiles() {
  const fileList = this.files
  const progressContainer = document.createElement("div")
  progressContainer.classList.add("file-container")

  // imagem de status do arquivo
  let item = document.createElement("div")
  var img = document.createElement("img")
  img.src = "./assets/loading.svg"
  item.appendChild(img)
  item.classList.add("progress")

  // Informações do arquivo
  let content = document.createElement("div")
  let p = document.createElement("p")
  let span = document.createElement("span")
  p.innerText = fileList[0].name
  span.innerText = formatBytes(fileList[0].size)
  content.append(p, span)
  content.classList.add("content")

  let progressDiv = document.createElement("div")
  progressDiv.classList.add("progress-container")
  let barraProgresso = document.createElement("div")
  barraProgresso.classList.add("progress-bar")
  let barraProgressoPorcent = document.createElement("div")
  barraProgressoPorcent.classList.add("progress-bar-porcent")
  barraProgresso.append(barraProgressoPorcent)
  let porcentagemText = document.createElement("p")

  progressDiv.append(barraProgresso, porcentagemText)
  content.append(progressDiv)

  progressContainer.append(item, content)
  container.append(progressContainer)

  if (progress == 0) {
    progress = 1
    var width = 1
    var id = setInterval(frame, 100)

    function frame() {
      if (width >= 100) {
        clearInterval(id)
        progress = 0
        barraProgressoPorcent.style.background = "#73B172"
        item.style.background = "#DAF2D9"
        img.src = "./assets/sucess.svg"
      } else {
        width++
        barraProgressoPorcent.style.width = width + "%"
        porcentagemText.innerText = width + "%"
      }
    }
  }
}

// pegar o tamanho do arquivo
function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "0 Bytes"

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
