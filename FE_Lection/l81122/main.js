// let person = {
//   name: "Anton",
//   "full name": "Full Name",
// }

// console.log(person.name);
// console.log(person["name"]);

// const name1 = "name";
// console.log(person.name1);

// person.age = 25;

// for (let i = 0; i <2; i++){
//   person["dog" + i] = "Jack" + i;
// } 

// console.log(person);

// const arr = ["a", "b", "c"];
// for (element of arr){
//   console.log(element);
// }

// let num1 = prompt("Number");
// console.log(num1);

// function cl(number) {
//   number *= 2;
//   console.log(number);
//   const arr = "";
// }

// cl(25);

// function square(number){
//   console.log(number**2)
// }

// square(4);

// function isEven(num) {
//   if (num % 2 === 0) {
//     console.log("Yes");
//   }
//   else {
//     console.log("No")
//   }
// }

// isEven(6);

// function fun (num1, num2){
//   console.log(num1**2 + num2**2);
// }

// fun(2,3);

// function func(num1, num2) {
//   if (num1 > num2) {
//     res = num1 - num2;
//     console.log(num1 + " is bigger than " + num2);
//   } else res = num2 - num1;
//   console.log(num2 + " is bigger than " + num1);
//   console.log(res);
// }
// func(5, 6);

// function createArray(num1) {
//   let arr = {};
//   for (let i = 0; i <= num1; i++){
//     arr[i] = i;
//   }
//   return arr;
// }
// console.log(createArray(5));

let dog = {
  "say gav": function() {
    console.log("Dog is barking");
  },
  name: "Sammy",
}

dog["say gav"]();