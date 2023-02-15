// Отсортируйте массив в рандомном порядке
// let array = [1,2,3,4,5,6,7,8,9,10];

// let newArray = array.sort(() => Math.random() - 0.5);
// console.log(newArray);
// let result = array.sort((elem, nextElem) => elem - nextElem);
// console.log(result);

// let users = [
//   {id: 1, name: 'Alex', salary: 1000},
//   {id: 2, name: 'Steven', salary: 5000},
//   {id: 3, name: 'Neena', salary: 450},
//   {id: 4, name: 'Wolyam', salary: 10000},
//   {id: 5, name: 'Jonh', salary: 799},
//   {id: 6, name: 'Clark', salary: 2222},
// ]

// let res = users.find((elem) => elem.name == 'Jonh')
// console.log(res);

// let res1 = users.find((elem, index) => index == 1 && elem.salary < 5000)
// console.log(res1);

// let res2 = users.findIndex(value => value.salary > 5000)
// console.log(res2);

// Найдите пользователся, id которого представляется в виде четного числа, а возраст менее 33

// let users = [
//     {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
//     {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 33},
//     {id: 3, name: 'Steven', lastname: 'Fersters', age: 35},
//     {id: 4, name: 'Neena', lastname: 'Maxwell', age: 31},
// ]

// let res = users.find(elem => elem.id % 2 == 0 && elem.age < 33);
// console.log(res);

// let res2 = users.some(elem => elem.id == 2);
// console.log(res2);

// let res3 = users.every(elem => elem.age > 2);
// console.log(res2);

// Решите следующие задачи: 
// 1) Определите наличие одного элемента, чей квадратный корень цены будет вычисляться без остатка. Выведите булевый тип
// 2) Определите, у всех ли элементов массива сво-во count отличимо от 0

// let data = [
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
//     {id : 4, goods: 'Ракетки', count: 30, price: 100},
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000}
// ]
// let res1 = data.some(elem => (Math.sqrt(elem.price)) % 1 == 0);
// console.log(res1);
// let res2 = data.every(elem => elem.count != 0);
// console.log(res2);

// Повторить метод some(), сформировав функцию some2(array, callback)
// Функция должна вернуть булевый тип

// function some2(...){
//   ...
// }


// some2(data, (value) => value.price > 1000)


// function some2(array, callback){
//   let result = 'false';
//   for(let i = 0; i < array.length; i++){
//     if(callback(array[i])) {
//       result = 'true';
//       break;
//     } 
//     console.log(result);
//   }
// }

// some2(data, (elem) => elem.price > 5000);               !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ================================================================= TASKS

// Дан массив с числами
// let numbers = [3, -10, 7, 0, -50, 67, -47, 4, 564];
// 1. Сформировать массив, в который попадут все положительные числа, заканчивающиеся на 7

// let result = numbers.filter(elem => elem >= 0 && elem % 10 == 7);
// console.log(result);


// 2. Написать программу, высчитывающую количество положительных чисел в массиве => 5


// let res = numbers.reduce((accum, elem) => (elem >=0 && elem >=5) ? accum += 1 : accum + 0, 0);
// console.log(res);

// Дан массив с числами
// let numbers2 = [4, 16, -5, 9, -81, 100, -49];

// 3. Сформируйте массив из положительных чисел. Извлеките из каждого значения квадратный корень. Отсортируйте полученные числа в массиве в порядке возрастания.
// => [2, 3, 4, 10]

// const res = numbers2.filter(elem => elem >=0)
// .map(elem => elem ** 0.5)
// .sort((a,b) => a-b);
// console.log(res);

// Дан массив с разными типами данных
// 4. Сформировать массив из строк. Если елемент не строка, подставить вместо него строку 'not a string'

// let elements = [true, 'hello', 'apple', 4, undefined, 'banana', -7];

// let res = elements.map(elem => typeof(elem) != 'string' ? 'not a string' : elem);
// console.log(res);

// Дан массив с числами

// const nums = [1, 2, 3, 4]; 

// 5. Найти среднеарифметическое число => 2.5

// const res = (nums.reduce((accum, elem) => accum+=elem))/ nums.length;
// console.log(res);

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
// 6. Пройтись по массиву методом forEach() и вывести каждый элемент массива в консоль
// users.forEach(elem => console.log(elem));

// 7. Получить из всех объектов значения age и сформировать из них массив чисел users_age => [20, 12, 46, 30]
// let res = users.map(elem => elem.age);
// console.log(res);

// 8. Сформировать массив из users, который зарабатывают больше 700
// let res = users.filter(elem => elem.salary > 700);
// console.log(res); 

// 9. Добавьте в конец массива users объект со следующей информацией:
let newUser = {
  first_name: 'Anton',
  last_name: 'Bogomolov',
  age: 19,
  salary: 300
}

// users.push(newUser);
// console.log(users);

// ДЗ:
// 1. Сформируйте массив из строк, состоящих только из имен и фамилий пользователей. Выведите результат в консоль.

// let fullNames = [];
// users.forEach(elem => {
// fullNames.push(elem.first_name + ' ' + elem.last_name);
// })
// console.log(fullNames);

// 2. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']

const adults = [];
users.map(user => {
  if(user.age >= 18){
    adults.push(`${user.first_name} ${user.last_name} (${user.age}): ${user.salary}`);
  }
})
console.log(adults);


// 3. Сформируйте новый массив без объекта, где first_name == "Irina"
const newArray = [];
users.map(user => {
  if(user.first_name == 'Irina'){
    newArray.push(`${user.first_name}, ${user.last_name}, ${user.age}, ${user.salary}`);
  }
})
console.log(newArray);

