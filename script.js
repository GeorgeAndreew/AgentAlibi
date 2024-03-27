let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}
let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)


// Красивая кнопка 'Отправить'
function make_transparent() {
    send_btn.style.backgroundColor = 'transparent'
}

function make_colorful() {
    send_btn.style.backgroundColor = '#C2AB99'
}

let send_btn = document.querySelector('.submit-btn-send')


const nav = document.querySelector('nav')
window.addEventListener('scroll', function () {
    if (this.window.scrollY > 900) {
        nav.style.display = 'flex'
    }
    else {
        nav.style.display = 'none'
    }
}) 
