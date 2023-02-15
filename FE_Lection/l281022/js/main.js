const r =12;
const g = 24;
const b = 14;

// console.log(`rgb(${r},${g}, ${b})`);

// const num1 = "12";
// const num2 = "24";
// console.log(+num1 + +num2);

// const num3 = 25;
// console.log(num3 + "");

// const num4 = "goo";
// console.log(+num4);

// age = prompt("How old are you?");
// alert(age**3);

let num1 = prompt("enter first number");
let num2 = prompt("enter second number");
if(+num1 > +num2){
  alert("num1 > num2");
} else if (+num1 < num2) {
  alert("num1 < num2")
} else alert("num1 = num2");
