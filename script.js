let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

// Код, который меняет тему
function change_theme() {
   let header = document.querySelector('header')
   if (current_background == 'url(https://learn.algoritmika.org/uploads/2022/11/bg_space.png)') {
       current_background = 'url(https://learn.algoritmika.org/uploads/2022/11/bg_mars.png)'
   } else {
       current_background = 'url(https://learn.algoritmika.org/uploads/2022/11/bg_space.png)'
   }
   header.style.background = current_background
   header.style.backgroundSize = 'cover'
}
 
let change_theme_button = document.querySelector('.switch-theme-button')
let current_background = 'url(https://learn.algoritmika.org/uploads/2022/11/bg_mars.png)'
change_theme_button.addEventListener('click', change_theme)
 

// Подсчет стоимости билета
function calc_price() {
   let days_input = document.querySelector('.days-input')
   let days_amount = days_input.value
   if (days_amount == '') {
       days_input.style.border = '1px solid #AD4851'
   } else {
       let one_day_price = +document.querySelector('.submit-select').value
       let total = +days_amount * one_day_price
       days_input.style.border = 'none'
       days_input.style.borderBottom = '1px solid #5D4229'
       alert(total)
   }
}
let calc_button = document.querySelector('.submit-btn-calc')
calc_button.addEventListener('click', calc_price)


// Красивая кнопка 'Отправить'
function make_transparent() {
    send_btn.style.backgroundColor = 'transparent'
}
 
function make_colorful() {
    send_btn.style.backgroundColor = '#C2AB99'
}

let send_btn = document.querySelector('.submit-btn-send')

send_btn.addEventListener('mouseenter', make_transparent)
send_btn.addEventListener('mouseleave', make_colorful)

// Пасхалка
function easter_egg() {
    let mars1 = document.querySelector('.mars1')
    let mars2 = document.querySelector('.mars2')
    let mars3 = document.querySelector('.mars3')
    let mars4 = document.querySelector('.mars4')
    let mars5 = document.querySelector('.mars5')
    mars1.style.color = '#AD4851'
    mars2.style.color = '#AD4851'
    mars3.style.color = '#AD4851'
    mars4.style.color = '#AD4851'
    mars5.style.color = '#AD4851'
}
 
let mars = document.querySelector('.mars1')
mars.addEventListener('click', easter_egg)