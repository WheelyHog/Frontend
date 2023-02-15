// console.log(window.getComputedStyle);

// let div = document.createElement("div");
// div.style.width = "90%";
// console.log(window.getComputedStyle(div).width);
// console.log(window.getComputedStyle(div, "::after"));

//getpropertyValue
//scope
// 1) global scope
// 2) function scope
// function name() {
//   let dog = "Rex";
//   console.log(dog);
// }
// name();
// console.log(dog);

// 3) block 
// let name = "Joe";
// if (true) {
//   let num1 = 30;
//   var num2 = 20;
//   const num3 = 10;
// }
// console.log(num2);
// console.log(num3);
// console.log(num1);
// console.log(name);

// Даны картинки в виде массива. Напишите цикл, который создает картинки на основе этого массива. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.\
// const img = [
//   "https://www.gorilladoctors.org/wp-content/uploads/2014/10/empowering2-300x300.jpg",
//   "https://i.pinimg.com/originals/7f/a1/0f/7fa10fdd13baa44a73f0a77ed32e8566.jpg",
//   "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg",
//   "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-03.jpg",
// ];

// for (let i = 0; i < img.length; i++){
//   let image = document.createElement("img");
//   image.setAttribute("src", img[i]);
//   document.body.appendChild(image);
//   image.onclick = () => {
//     alert(img[i]);
//   }
// }

// 2) Даны числа в виде массива.Напишите функцию ,которая создает параграфы на основе этого массива. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.

// let nums = [2, 3, 4, 5, 6];

// function foo() {
// for (const item of nums) {
//   let btn_decr = document.createElement("button");
//   let p = document.createElement("p");
//   let btn_incr = document.createElement("button");
//   btn_decr.innerText = "-";
//   btn_incr.innerText = "+";
//   p.innerText = item;

//   document.body.append(btn_incr, p, btn_decr);
//   p.onclick = () => {
//     p.innerText = p.innerText **2;
//   }
//   btn_incr.onclick = () => {
//     p.innerText = +p.innerText + 1;
//     console.log(p.innerText);
//   }
//   btn_decr.onclick = () => {
//     p.innerText = +p.innerText - 1;
//   }
// }
// }
// foo();

// 3) Доработайте предыдущий скрипт. Добавьте к каждому абзацу 2 кнопки. Одна кнопка при клике уменьшает число на единицу, а другая кнопка увеличивает на единицу.
// let nums = [2, 3, 4, 5, 6];

// function foo() {
//   for (const item of nums) {
//     let div = document.createElement("div");
//     div.style.display = "flex";
//     let btn_decr = document.createElement("button");
//     let p = document.createElement("p");
//     let btn_incr = document.createElement("button");
//     btn_decr.innerText = "-";
//     btn_incr.innerText = "+";
//     p.innerText = item;

//     div.append(btn_incr, p, btn_decr);
//     document.body.appendChild(div);
//     p.onclick = () => {
//       p.innerText = p.innerText ** 2;
//     }
//     btn_incr.onclick = () => {
//       p.innerText = +p.innerText + 1;
//       console.log(p.innerText);
//     }
//     btn_decr.onclick = () => {
//       p.innerText = +p.innerText - 1;
//     }
//   }
// }
// foo();

// 5) У нас есть кнопка в html документе. С помощью скриптов сделайте след. логику:
// 1)добавьте 3 event listener-а на кнопку, которые выводят на экран 1,2,3. (первая функция выводит цифру 1, вторая - 2, и последняя 3),
// 2) Пусть при первом клике на кнопку сработают все 3 функции и при этом func1 и func2 отвяжутся от элемента. И при следующих кликах будет срабатывать только функция func3, которую мы не отвязываем.
// const btn = document.createElement("button");
// btn.innerText = "Click me!";

// document.body.append(btn);

// btn.addEventListener("click", func1);
// btn.addEventListener("click", func2);
// btn.addEventListener("click", func3);

// // hoisting

// function func1() {
//   alert("1");
//   btn.removeEventListener("click", func1);
// }
// function func2() {
//   alert("2");
//   btn.removeEventListener("click", func2);
// }
// function func3() {
//   alert("3");
// }


const btn1 = document.createElement("button");
btn1.innerText = "start";
const btn2 = document.createElement("button");
btn2.innerText = "end";

let p = document.createElement("p");

document.body.append(btn1, btn2, p)

btn1.addEventListener("click", () => {
  document.addEventListener("mousemove", move);
})

btn2.addEventListener("click", () => {
  document.removeEventListener("mousemove", move);
})

function move(event) {
  p.innerText = `X: ${event.pageX} Y: ${event.pageY}`;
}