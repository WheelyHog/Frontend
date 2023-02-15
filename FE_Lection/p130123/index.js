// Задача 1.
// Определить индекс второй подстроки 'date' у переменной string.
// Код должен работать на 2 тестах
// 1-ый тест
// let string = 'date 10.10.10 date 20.20.20 date 30.30.30' 
// 14    

// 2-ой тест
// let string = '10.10.10.10.10.10 date 20.20.20 date 30.30.30 date'   
// 32

// const res = string.indexOf('date', string.indexOf('date') + 1);
// console.log(res);

// Задача.
// Задан формат даты в переменной dates в виде строки.
// '2022/10/18' - американский
// '2022.10.18' - русский

// Напишите программу, которая определит к какой стране относится формат даты
// В качестве ответа вывести сообщение "Формат даты российский"

// Пример:
// let date = '2020/10/18'

// Результат:
// Формат даты американский

// function setFormat(date) {
//   if(date.includes('/')){
//     console.log('American');
//   } else console.log('russian');
// }
// setFormat(date);

// Задача 3.
// Задан массив emails, передающий строковые элементы. Определите, все ли элементы содержат верную почту.
// Критерии правильной почты: наличие "@" и "."
// В качестве ответа необходимо в консоль вывести ответ true/false для каждого элемента.

// Пример:
// let emails = ['top@dot.com', 'abra@gmailcom', 'pot.mail.ru', 'grek@pro.pro']

// Результат:
// true
// false
// false
// true

  // for(let i = 0; i < emails.length; i++){
  //   if((emails[i].includes('@') && emails[i].includes('.'))){
  //   console.log('true'); 
  // } else console.log('false');
  // }


  // for(let elem of emails){
  //   if(elem.includes('@') && elem.includes('.')){
  //     console.log(true);
  //   } else console.log(false);
  // }

// Задача 4
// Задан массив phones, передающий номера телефонов в виде строки.
// Реализуйте очистку данных, сформировав единый вид для все элементов массива.phones

// Пример:

let phones = ['891 11112 233','89111-1122-44','8911-11122-55','89111112266']

// Результат:

// ['+79111112233','+79111112244','+79111112255','+79111112266']

// const arr = [];
// const res = [];
// phones.forEach(elem => {
//   arr.push(elem.replaceAll('-', '').replaceAll(' ', ''));
// })
  
//   res = arr.forEach(elem => {
//     if(elem.startsWith('8')){
//       elem.replace('8', '+7')
//     }
//   }
// )
// console.log(res);

// for(let i in phones){
//   phones[i] = phones[i].replaceAll(' ', '').replaceAll('-', '').replace('8', '+7')

// }
// console.log(phones);

console.log(phones.map(elem =>elem.replaceAll(' ', '').replaceAll('-', '').replace('8', '+7')));