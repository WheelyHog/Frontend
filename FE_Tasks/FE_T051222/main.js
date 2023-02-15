const addForm = document.querySelector(".add_form");
const addFormResult = document.querySelector(".add_form_result");

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { type, content, color } = event.target;
  console.log(type.value);
  console.log(content.value);
  console.log(color.value);

  const elem = document.createElement(type.value);
  elem.innerText = content.value;
  elem.style.color = color.value;
  addFormResult.append(elem);

  type.value = '';
  content.value = '';
  color.value = '';

})

const images = [
  "https://cdnn21.img.ria.ru/images/155666/00/1556660022_36:0:2767:2048_1920x0_80_0_0_0f95880a02fc9e226884ce632677e009.jpg",
  "https://n1s1.hsmedia.ru/bc/a3/fe/bca3fe6f32ac44ec9af8520490d26be2/1920x1152_0xac120003_15211652711625304484.jpg",
  "https://bigenc.ru/media/2016/10/27/1235177203/11340.jpg",
  "https://vot-enot.com/wp-content/uploads/2021/11/94895c23dcc1cf7.jpg"
];

const imgSlider = document.querySelector(".img_slider");
let imgIndex = 0;

imgSlider.addEventListener("click", (event) => {
  event.target.src = images[imgIndex++ % images.length]
})

// imgIndex++ %images.length;



const imgSlider2 = document.querySelector('.img_slider2');
const left_btn = document.querySelector('.left_btn');
const right_btn = document.querySelector('.right_btn');

let imgIndex2 = 0;

right_btn.addEventListener('click', () => {
  imgSlider2.src = images[++imgIndex2 % images.length];
  // console.log(++imgIndex2 % images.length);
});
left_btn.addEventListener('click', () => {
  imgSlider2.src = images[--imgIndex2 % images.length];

  if (imgIndex2 === 0){
    imgIndex2 = images.length;
  }

  // imgIndex2 = Math.abs(imgIndex2);
  // console.log(--imgIndex2 % images.length);
});
