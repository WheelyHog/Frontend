const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg'
]

let sliderIndex = 0;

let div_root = document.querySelector('#root')

let frame = document.createElement('div')
let cards = document.createElement('div')
let triggers = document.createElement('div')
triggers.className = 'triggers'

let left_btn = document.createElement('button')
let right_btn = document.createElement('button')
left_btn.className = 'trigger-button'
right_btn.className = 'trigger-button'

right_btn.addEventListener('click', goRight)
left_btn.addEventListener('click', goLeft)

left_btn.innerText = '<'
right_btn.innerText = '>'

triggers.append(left_btn, right_btn)


for (let elem of images) {
    let card = document.createElement('div')
    card.className = 'card'
    card.style.backgroundImage = `url(${elem})`
    cards.append(card)
}

frame.className = 'frame'
cards.className = 'cards'

frame.append(cards, triggers)
div_root.append(frame)

function goRight() {
    if (sliderIndex < images.length - 1) {
        sliderIndex++;
        cards.style.left = `${-1 * sliderIndex * 500}px`
    }
}

function goLeft() {
    if (sliderIndex != 0) {
        sliderIndex--
        cards.style.left = `${-1 * sliderIndex * 500}px`;
    }
}