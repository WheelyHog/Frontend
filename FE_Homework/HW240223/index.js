const banner = [
  {
    id: 1,
    title: 'Бухгалтерские услуги в вашем городе',
    button_text: 'Наша презентация',
    button_action: '',
    slider_src: './images/banner1.png'
  },
  {
    id: 2,
    title: 'Бухгалтерские услуги в вашем городе',
    button_text: 'Наша презентация',
    button_action: '',
    slider_src: './images/banner1.png'
  },
  {
    id: 3,
    title: 'Бухгалтерские услуги в вашем городе',
    button_text: 'Наша презентация',
    button_action: '',
    slider_src: './images/banner1.png'
  },
  {
    id: 4,
    title: 'Бухгалтерские услуги в вашем городе',
    button_text: 'Наша презентация',
    button_action: '',
    slider_src: './images/banner1.png'
  },
]

let bannerSlider = document.querySelector('.banner_slider')

// let banner_frame = document.querySelector('.banner_frame')
// let banner_title = document.querySelector('.banner_title')
// let banner_btn = document.querySelector('.presentation_btn')

let right_btn = document.querySelector('.arrow_right')
let left_btn = document.querySelector('.arrow_left')
let dotList = document.querySelectorAll('.banner_dot')

function changeSlide(sliderCount = 0, bannerSlider, right_btn, left_btn, dotList, slideWidth, class_name) {
  right_btn.addEventListener('click', () => {
    sliderCount++;
    if (sliderCount == banner.length) {
      bannerSlider.style.transform = `translateX(0px)`
      sliderCount = 0;
    } else bannerSlider.style.transform = `translateX(${sliderCount * -slideWidth}px)`
    setDot(sliderCount)
  })

  left_btn.addEventListener('click', () => {

    if (sliderCount != 0) {
      sliderCount--;
      bannerSlider.style.transform = `translateX(${sliderCount * -slideWidth}px)`
    } else {
      sliderCount = banner.length - 1;
      bannerSlider.style.transform = `translateX(${sliderCount * -slideWidth}px)`
    }
    setDot(sliderCount)
  })

  function setDot(sliderCount) {
    for (let i = 0; i < banner.length; i++) {
      if (i == sliderCount) {
        dotList[i].classList.add(class_name)
      } else {
        dotList[i].classList.remove(class_name)
      }
    }
  }

  function getDot() {
    for (let i = 0; i < banner.length; i++) {
      dotList[i].onclick = () => {
        setDot(i);
        sliderCount = i;
        bannerSlider.style.transform = `translateX(${i * -slideWidth}px)`
      }
    }
  }

  getDot()
}

changeSlide(sliderCount = 0, bannerSlider, right_btn, left_btn, dotList, 1920, 'dot_active') // top_banner

// ----------------------------clients_slider-------------------------

let clientSlider = document.querySelector('.clients_frame')
let r_btn = document.querySelector('.div_arrow_right')
let l_btn = document.querySelector('.div_arrow_left')
let clients_dot_list = document.querySelectorAll('.client_dot')

changeSlide(sliderCount = 0, clientSlider, r_btn, l_btn, clients_dot_list, 1110, 'client_dot_active') // clients_slider

// -----------------------------feddback_slider-----------------------------
let feedbackSlider = document.querySelector('.feedback_frame')
let feedback_right_btn = document.querySelector('.f_arrow_right')
let feedback_left_btn = document.querySelector('.f_arrow_left')
let feedback_dot_list = document.querySelectorAll('.feedback_dot')

changeSlide(sliderCount = 0, feedbackSlider, feedback_right_btn, feedback_left_btn, feedback_dot_list, 1110, 'feedback_dot_active')