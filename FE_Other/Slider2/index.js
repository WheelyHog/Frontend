let sliderline = document.querySelector('.sliderline')
let btnLeft = document.querySelector('.left')
let btnRight = document.querySelector('.right')
let title = document.querySelector(('.title'))

let count = 0
let width = 1920

function rollSlider() {
    sliderline.style.transform = 'translateX(-' + count * width + 'px'
}
btnRight.addEventListener('click', ()=> {
    count++
    if(count >= 3){
        count = 0
    }
    rollSlider()
    title.style.animation = "text 1s 1"
    setTimeout(() => {title.style.animation = ''}, 3000)
    //
})