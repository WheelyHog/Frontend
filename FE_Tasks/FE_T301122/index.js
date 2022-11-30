// 1. Создать кнопку с размерами 30х30 пикс, при каждом нажатии на кнопку увеличивать высоту и ширину на 10 пикс
let incr_btn = document.querySelector(".incr_btn");
let btn_size = 30;

const incr_btn_render = (size) => {
  incr_btn.style.height = size + 'px';
  incr_btn.style.width = size + 'px';
}

incr_btn_render(btn_size);

incr_btn.addEventListener("click", () => {
  btn_size += 10;
  incr_btn_render(btn_size);
})
// ------------------

let color_btn = document.querySelector(".color_btn");
color_btn.onclick = () => {
  
  color_btn.style.background = `rgb(${render_color()},${render_color()}, ${render_color()})`;
}
const render_color = () => {
  return Math.round(Math.random() * 255);
}


// 3. Вывести в консоль случайное целое число от 0 до 10
const p = document.createElement("p");
p.innerText = (Math.floor(Math.random() * 6)+1) + " x " + (Math.floor(Math.random() * 6)+1);
document.body.append(p);
