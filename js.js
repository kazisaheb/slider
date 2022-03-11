img = document.getElementById('img')
let i = 1
slider = () => {
  if (i > 3) { i = 1 }
  let url = `imgs/${i}.jpg`
  img.setAttribute('src', url)
  i++
}
setInterval(slider, 1000)