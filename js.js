img = document.getElementById('img')
let i = 1
setInterval(() => {
  if (i > 3) { i = 1 }
  let url = `imgs/${i}.jpg`
  img.setAttribute('src', url)
  i++
}, 1000)