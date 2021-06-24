var bars = document.getElementById('bars')
var times = document.getElementById('times')
var circle = document.querySelector('.circle-container')
var container = document.querySelector('.container')
var nav = document.querySelector('.nav')

bars.addEventListener('click', ()=>{
    circle.classList.add('active')
    container.classList.add('active')
    nav.classList.add('active')
})

times.addEventListener('click', ()=>{
    circle.classList.remove('active')
    container.classList.remove('active')
    nav.classList.remove('active')
})