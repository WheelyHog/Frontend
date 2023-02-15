// let obj = {
//   'first name': 'Tigran',
//   age: 30
// }
// console.log(obj["first name"]);

// for(let key in obj){
//   console.log(key, obj[key]);
// }

// Задача 1 
// Используя цикл, выведите все значения объекта с числовым набором данных.

// Пример:
// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1,
// }

// Результат:
// 1
// 3
// 1

// for(let key in obj){
//   if(typeof obj[key] == 'number'){
//     console.log(obj[key]);
//   }
// }

// Задача 2.
// Используя цикл, выведите значения сво-св, у которых 
// значение ключа завершатся на четное число. 

// Пример:
let obj = {
  char1: 1,
  char2: 'string',
  char3: 3,
  char4: true,
  char5: 'false',
  char6: 1
}

// Результат:
// string
// true
// 1

// for (let key in obj) {
//   if (key.slice(key.length - 1) % 2 == 0) {
//     console.log(obj[key]);
//   }
// }

// ======================= Practice ==========
// 1. Создать функцию, которая принимает в качестве аргументов объект и ключ объекта и возвращает значение по этому ключу

const user = {
  firstname: 'Oleg',
  age: 30
}

const product = {
  title: 'Apple',
  price: 500,
  country: 'Germany'
}

// console.log(objValue(user, 'firstname')); // 'Oleg'
// console.log(objValue(user, 'age')); // 30

// console.log(objValue(product, 'price')); // 500
// console.log(objValue(product, 'country')); // 'Germany'


// function objValue(obj, key){
// return obj[key];
// }

// console.log(objValue(user, 'firstname'))

// 2. У объекта product зменить значение price на 700;

// product.price = 700;
// console.log(product.price);

// 3. У объекта product увеличить значение price на 700;

// product.price += 700;

// product.price++;
// console.log(product.price);

const users = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
  },

  {
    first_name: 'Olga',
    last_name: 'Petrova',
    age: 12,
    salary: 250
  },

  {
    first_name: 'Irina',
    last_name: 'Alexandrova',
    age: 46,
    salary: 1500
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    salary: 760
  }
];

// console.log(users[0].hasOwnProperty('salary'))

// 5. Дан массив. Проверьте, что массив не пустой - в нем есть хотя бы один объект со свойством salary
// console.log(users.map(elem => elem.salary ? '+' : '-'))

// 8. Узнать количество совершеннолетних пользователей. Вывести число в консоль

// console.log(users.reduce((accum, elem) => elem.age >= 18 ? accum +=1 : accum += 0, 0))

// 9. Напишите функцию, которая находит в массиве users объект с age 30 и возвращает этот объект, но со значением age 85. Результат вызова функции вывести в консоль
// {
//   first_name: 'Denis',
//   last_name: 'Sokolov',
//   age: 85,
//   salary: 760
// }
// let result = (users.find(elem => elem.age == 30 ? elem.age = 85 : elem.age));
 
// console.log(result);

// const change_age = () => {
//   const target_obj = users.find(el => el.age === 30); // находит объект по условию
//   target_obj.age = 85; // у найденного объекта меняет значение свойства age
//   return target_obj // возвращает измененный объект
// }

// console.log(change_age());

// 10. Сформировать массив из людей, чье имя начинается на I. В новом массиве увеличить всем возраст на 1

let array = (users.filter(elem => elem.first_name.startsWith('I')))
for(elem of array) {
  elem.age += 1;
}
console.log(array);