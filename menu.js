let btnMenu = document.getElementById('abrir-menu')
let menu = document.getElementById('menu-mobile')
let cu =document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

cu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})