// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.

// function ff(num1, num2) {
//   let arr = [];
//   if (num1 > num2) {
//     for (let i = num2; i <= num1; i++) {
//       arr.push(i);
//     }
//   } else if (num2 > num1) {
//     for (i = num1; i <= num2; i++) {
//       arr.push(i);
//     }
//   } else arr.push(num1);
//   console.log(arr);
// }

// ff(7,2);

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.

// function ff2(num1, num2){
//   let arr = [];
//   if (num1 > num2){
//     for (let i = num1; i >= num2; i--){
//       arr.push(i);
//     }
//   }
//   console.log(arr);
// }

// ff2(6,1);

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.

// const list = [5,6,7,1,2];
// let sum = 0;
// for (let num of list){
// sum += num;
// }
// console.log(sum);

// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений.Используя цикл, выведите в консоль сумму положительных чисел.

// const list = [1,2,3,5, -8,-6,7,-3];
// let result = 0;
// for (let num of list){
//   if (num > 0){
//     result += num;
//   }
// }
// console.log(result);

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.

// const list = [1,2,3,5, -8,-6,7,-3];
// let result =0;
// let sumEven = 0;
// let sumOdd = 0;
// for (let num of list){
//   if (num %2 ==0) {
//     sumEven += num;
//   } else sumOdd += num;
// }
// result = sumEven - sumOdd;
// console.log(result);


// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.
// let arr = [2,5,8,1,4,9]
// function foo (arr){
//   let obj = {};
//   let min = arr[0];
//   let max = arr[0];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     if (min > arr[i]) {
//       min = arr[i];
//     } else if (max < arr[i]){
//       max = arr[i];
//     }
//     sum += arr[i]; 
//   }
//   obj.min = min;
//   obj.max = max;
//   obj.avg = sum/arr.length;
//   console.log("min = " + min + " max = " + max + " avg = " + sum/arr.length);
//   console.log(obj);
//   return obj;
// }

// foo(arr);

// .В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.

// const word = "map";
// let newWord = '';
// for (let i = word.length - 1; i >= 0; i--) {
//   newWord += word[i];
// }
// console.log(newWord);

// .Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.

// const word = "mom";
// let newWord = '';
// for (let i = word.length - 1; i >= 0; i--) {
//   newWord += word[i];
// }
// console.log(word === newWord);

// .Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
// let sum = 0;
// for (let i = 0; i <=50; i += 5){
//   sum += i;
// }
// console.log(sum);


// Написать цикл, который выводит для каждого товара строку по маске “<title> (<price>)”

let products = [
	{
	id: 1,
	title: "велосипед",
price: 45000,
discount: 10
},
	{
	id: 2,
	title: "ролики",
price: 15000,
discount: 5
},
	{
	id: 3,
	title: "самокат",
price: 10000,
discount: 30
},
	{
	id: 4,
	title: "лыжи",
price: 25000,
discount: 20
},
	{
	id: 5,
	title: "скейт",
price: 10000,
discount: 0
}
]

// for (prod of products){
//   console.log(prod.title);
// }

for (prod of products){
  console.log(`${prod.title}, ${prod.price} `);
}