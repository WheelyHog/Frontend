// Задание: по нажатию на кнопку, необходимо заменить цвет с brown на darkgreen.
// При воторном нажатии необходимо вернуть старый цвет (brown)


let btn = document.querySelector('.btn_elem');
let div = document.querySelector('.container');
let time = document.querySelector('.h_text');

// btn.onclick = () => div.style.backgroundColor = div.style.backgroundColor == 'darkgreen' ? 'brown' : 'darkgreen';

// document.body.addEventListener('keydown', (event) => {
//   console.log(event.key, 'key')
//   console.log(event.code, 'code')
//   console.log(event.keyCode, 'keyCode')
// })
const d = new Date();
document.body.addEventListener('keydown', (event) => {
  if (event.key == 'L' && event.shiftKey == true)
    time.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
})
