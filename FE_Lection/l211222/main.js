// const array = [1, 2, 3]
// array.forEach((element) => console.log(element + 2));

// const array = [1,5,0,10,15]
// array.sort((a,b) => a-b);
// console.log(array);

// Задача. Отсортировать массив с товарами по значению id.


// const products = [
//   { id: 1, title: "велосипед", price: 45000 },
//   { id: 3, title: "сноуборд", price: 20000 },
//   { id: 2, title: "самокат", price: 15000 },
//   { id: 4, title: "лыжи", price: 22000 },
// ];

// products.sort((a,b) => a.id - b.id);
// products.sort((a,b) => b.id - a.id);
// console.log(products);

// Найти сумму двух больших положительных чисел

// function sumTwoSmallestNums(numbers){
//   numbers.sort((a,b) => b-a);

//   const newArr = numbers.filter((a)=> a > 0)

// return newArr.length == 0 ? 0 : newArr[0] + newArr[1];
// }

// console.log(sumTwoSmallestNums([-1,-2,-5,-6]));

// Задача 2. Используя метод reduce найти наибольшее число массива.

// const array = [1, -2, -3, 4, 5, -6];
// // const sumOfArray = array.reduce((accum, curValue) => (accum + curValue), 4)
// // console.log(sumOfArray);

// let result = array.reduce((accum, elem) =>  (accum < elem) ? elem : accum)
// console.log(result);

// const array = [
//   { id: 1, price: 45000 },
//   { id: 2, price: 50000 },
//   { id: 3, price: 11000 },
//   { id: 4, price: 5000 },
// ];
// Используя метод reduce найти объект товара с самой высокой ценой.


// let result = array.reduce((accum, elem) => 
// {
//  if (accum < elem) {
//   console.log(elem);
//  } console.log(accum);
// })
// console.log(result);

// let result = array.reduce((accum, elem) => accum.price > elem.price ? accum : elem)
// console.log(result);

// const products = [
//   { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
//   { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
//   { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 2, 3] },
//   { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
// ];

// // Задача 5. Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, max_mark.

// products.forEach((elem) => {
//   elem.max_mark = (elem.marks.reduce((accum, elem) =>  accum > elem ? accum : elem ));
//   delete elem.marks;
// })
// console.log(products);

// const numbers = [3,12,87,4,556,-9,-50]
// numbers.forEach(el => console.log(el));

// 2. Задан массив. Сформировать новый массив, в который попадут числа больше 0
// let newArr = numbers.filter((el) => el > 0)
// console.log(newArr);

// let newArr = numbers.map((el) => el*2);
// console.log(newArr);


// 5. Сформировать новый массив. Если число положительное, умножить его на два. А если отрицательное, то оставить как есть.

// let newArr = numbers.map(el => {
//   if(el > 0){
//     return el*2
//   } return el
// })
// console.log(newArr);


// 6. Сформировать новый массив с теми же строками, но если строка длиннее 3 символов, то вернуть ее в верхнем регистре

// const greetings = ['hello', 'hi'];
// let result = greetings.map(el => el.length > 3 ? el.toUpperCase(): el)
// console.log(result);

// 7. Дан массив random с разными типами данных. Сформировать новый массив, в который попадут только числовые значения из массива random

// const random = [5, 'hello', 77, true, 12, false];
// let result = random.filter(el => {
//   if(typeof(el) == "number" && typeof(el) != 'boolean') {return el}})
//   console.log(result);

// 8. Сформировать новый массив. Если элемент число, то вернуть этот элемент. В ином случае - вернуть -1

  const random = [5, 'hello', 77, true, 12, false];
let result = random.map(el => {
  if(typeof(el) == "number"){
   return el} else return -1})
  console.log(result);