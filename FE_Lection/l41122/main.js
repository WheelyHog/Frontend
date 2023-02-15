'use strict';


// let array = [];
// while (true) {
//   let value = prompt("enter num", "");
//   if (value === "" || value === null || !isFinite(value)) break;
//   array.push(+value);
// } 
// let sum = 0;
// for ( let i =0; i < array.length; i++){
//   sum += array[i];
// }
// console.log(sum);

const products = [
  {
    title: "Nike",
    price: 300,
    type: "shoe",
    count: 5,

  },
  {
    title: "Puma",
    price: 600,
    type: "shoe",
    count: 25,

  },
  {
    title: "Chanel",
    price: 1200,
    type: "bag",
    count: 40

  },
  {
    title: "BMW",
    price: 7000,
    type: "car",
    count: 15,

  },
];

// let sum = 0;
// for(let i = 0; i < products.length; i++){
//   if (products[i].price > 1000){
//     console.log(products[i].title);
//   }

// // console.log(`${products[i].title}, ${products[i].price}, ${products[i].type}`);
// }
// console.log(sum);
// products[0].color = "red";
// delete products.color;

// for (let i = 0; i < products.length; i++) {
//   let { title, type } = products[i];
//   if (type === "shoe") {
//     console.log(`${title}, ${type}`);
//   }
//   // console.log(`${title}, ${price - price * .3}, ${type}, ${color}`);
// }

// for (let i = 0; i < products.length; i++){
//   if (products[i].type === "shoe"){
//     console.log(products[i].title + ", " + products[i].type);
//   }
// }

// for (let i = 0; i < products.length; i++) {
//   let { title, count } = products[i];
//   if (count > 10) {
//     console.log(`${title}, ${count}`);
//   }
// }

// for (let i = 0; i < products.length; i++){
//   if (products[i].count > 10){
//     console.log(products[i].title + ", " + products[i].count);
//   }
// }

const cheapProducts = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price < 1000){
    cheapProducts.push(products[i]);
  }
}
console.log(cheapProducts);