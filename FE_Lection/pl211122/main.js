// function hi(){
//   console.log("Hello!");
// }

// let newHi = function(){
//   console.log("Hello expression!");
// }

// hi();
// newHi();

// let arrow = () => {
//   console.log("Arrow!");
// }

// arrow();

// let arrow1 = () => {
//   return "return arrow";
// }

// let shortArrow = () =>  "arrow return";

// console.log(arrow1());
// console.log(shortArrow());

// const function1 = function() {
//   console.log("function1");
// }

// const function2 = function(callback){
//   console.log("function2");
//   callback();
// }

// function2(function1);

// function sumArray(arr){
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum;
// }

// function arrOdd(arr){
//   let res = [];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 !== 0)
//     res.push(arr[i]);
//   }
//   return res;
// }

// let workArray = function(arr, callback){
//   return callback(arr);
// }

// console.log(workArray([1,2,3,4,5], sumArray));
// console.log(workArray([1,2,3,4,5], arrOdd));

// const btn = document.createElement("button");
// btn.innerText = "Press Me";
// document.body.append(btn);

// btn.addEventListener("click", () => alert("sgjhasgvsgh"));
// btn.onclick = function() {
//   console.log("Ouch!!!")
// }

// const decrement = document.createElement("button");
// decrement.innerText = "+";
// const p = document.createElement("p");
// p.innerText = "2";
// console.log(typeof p.textContent);
// const increment = document.createElement("button");
// increment.innerText = "-";

// let numOfP = +p.textContent;

// document.body.append(decrement, p, increment);

// decrement.onclick = () =>{numOfP++; p.innerText = numOfP};
// increment.onclick = () =>{numOfP--; p.innerText = numOfP};

// const multiply = document.createElement("button");
// multiply.innerText = "*";
// const p = document.createElement("p");
// p.innerText = "2";
// console.log(typeof p.textContent);
// const divide = document.createElement("button");
// divide.innerText = "/";

// let numOfP1 = +p.textContent;

// document.body.append(multiply, p, divide);

// multiply.addEventListener("click", function(){
//   numOfP1*=2;
//   p.innerText = numOfP1;
// })

// divide.addEventListener("click", function() {
//   numOfP1/=2;
//   p.innerText = numOfP1;
// })

// const p = document.createElement("p");
// p.innerText = "";
// addEventListener("keydown", (event) => {
//   p.innerText += event.key;
//   document.body.append(p);
// })

// const strings = [
//   "This is some text",
//   "You can use event listener",
//   "Future frontend developer",
//   "Never give up",
// ];

// for (let string of strings) {
//   const p = document.createElement("p");
//   p.innerText =string;
//   document.body.append(p);
//   p.onclick = () =>{
//     p.innerText ="";
//     for(let i = 0; i < string.length; i++){
//     p.innerText +="*";
//   }
// }
// }
// FE TASKS --------------------------------------------------
// callback
// const func1 = (func2) => {}

// const mult2 = () => 2*2;

// const mult_ = (num) => 2 * num;
// mult_(50);

// const numbers = [1,2,3,4,5];
// const squareNums = (arr) => {
//   let result = [];
//   for (let i =0; i < arr.length; i++){
//     result.push(arr[i]**2)
//   }
//   return result;
// }

// const changeNums = (arr, callback) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++){
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

const btn = document.querySelector(".change_text_color");
btn.onclick = () =>{
  const text = document.querySelector(".text");
  text.style.color = "red";
}

// ДЗ:
// 1. При клике на кнопку выводится сообщение 'hello' в консоль
// 2. При клике на кнопку меняется цвет заднего фона у параграфа
// 3. При клике на кнопку цвет фона меняется на черный, а при следующем клике меняется на белый
