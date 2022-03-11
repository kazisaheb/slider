const slideImg = document.getElementById('slideImg')
let i = 1
const slider = () => {
  if (i > 3) { i = 1 }
  let srcUrl = `imgs/${i}.jpg`
  slideImg.setAttribute('src', srcUrl)
  i++
}
setInterval(slider, 1000)