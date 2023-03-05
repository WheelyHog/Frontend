const images = document.querySelectorAll('.slider .slider-line img')
const paragraphs = document.querySelectorAll('.slider .text-line p')

const sliderLine = document.querySelector('.slider-line')
const textLine = document.querySelector('.text-line')

let count = 0
let width

function init() {
    console.log('resize')
    width = document.querySelector('.slider').offsetWidth

    sliderLine.style.width = width * images.length + 'px'
    textLine.style.width = width * paragraphs.length + 'px'

    images.forEach(item => {
        item.style.width = width + 'px'
        // item.style.height='670px'
    })

    paragraphs.forEach(item => {
        item.style.width = width + 'px'
        // item.style.height='670px'
    })


    rollSlider()
    // console.log(width)
}

window.addEventListener('resize', init)
// init()

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--
    if (count < 0) {
        count = images.length-1
    }
    rollSlider()
})

document.querySelector('.slider-next').addEventListener('click', function () {
    count++
    if (count >= images.length) {
        count = 0
    }
    rollSlider()
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
    textLine.style.transform = 'translate(-' + count * width + 'px)'
    console.log("rollSlider works")
}