// Задана почта в переменной email. 
// 1)Выведите в консоль только логин почты.
// Пример:
// let email = 'thegreat@mail.com'
// let email = 'tigran@rambler.net'
// let email = 'the.great@mail.berlin.com';
// Результат: thegreat

// console.log(email.slice(0, email.indexOf('@')));
// Результат: tigran

// 2) Выведите в консоль только логин домена (mail, rambler)
// console.log(email.slice(email.indexOf('@') + 1, email.lastIndexOf('.')));

// 3) Выведите в консоль только доменную зону (com, net)
// console.log(email.slice(email.lastIndexOf('.') + 1));

// console.log(email.slice(email.lastIndexOf('.', email.lastIndexOf('.') - 1) +1 ));

// Задача 2. 
// Задача строка string. Сформируйте новую подстроку по следующему правилу: 
// если строка начинается на date: в этом случае оставьте только дату
// если в строка не начинает на date - оставить строку в исходном виде

// Пример:
// 1) 
// let string = 'date: 2022.10.10'
// 2) 
// let string = '2010.06.06'
// Результат: 
// 1) '2022.10.10'
// 2) '2010.06.06'

// console.log(string.startsWith('date') ? string.slice(string.indexOf('date') + 'date'.length + 2) : string)
// console.log(string.replace('date: ', ''));

// Задан массив phones
// Сформируйте новый массив newPhones. 
// Если телефон начинается на +7 - он должен оказаться в новом массиве

// Пример:
// let phones = ['+7975644911','8975644944','+7975644999','+7975644945']

// Результат:
// ['+7975644911','+7975644999','+7975644945']

// let newPhones = phones.filter(elem => elem.startsWith('+7'))
// console.log(newPhones);

// ====================================================
// const users = [
//   {
//     first_name: 'Ivan',
//     last_name: 'Ivanov',
//     age: 20,
//     salary: 500
//   },

//   {
//     first_name: 'Olga',
//     last_name: 'Petrova',
//     age: 12,
//     salary: 250
//   },

//   {
//     first_name: 'Irina',
//     last_name: 'Alexandrova',
//     age: 46,
//     salary: 1500
//   },

//   {
//     first_name: 'Denis',
//     last_name: 'Sokolov',
//     age: 30,
//     salary: 760
//   }
// ]
// 1. Сформируйте массив из строк, состоящих только из имен и фамилий пользователей. Выведите результат в консоль.
// const user_names = users.map(el =>  `${el.first_name} ${el.last_name}`);

// / 2. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']

// const adult_users = users.filter(el => el.age >=18).map(el => `${el.first_name} ${el.last_name} (${el.age}): ${el.salary}`)
// console.log(adult_users);
// / 3. Сформируйте новый массив без объекта, где first_name == "Irina"
// const users_without_irina = users.filter(el => el.first_name !== 'Irina');

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
    first_name: 'irina',
    last_name: 'Alexandrova',
    age: 46,
    salary: 1500
  },

  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    salary: 760
  },

  {
    first_name: 'Anton',
    last_name: 'Bogomolov',
    age: 19,
    salary: 300
  }
];
// 4. Сформировать массив из объектов, в которых имя начинается на букву I. Регистр может быть любой.
// const newArray = users.filter(elem => elem.first_name.startsWith('I') || elem.first_name.startsWith('i'));
// console.log(newArray);

// 5. Найти в массиве элемент/объект с именем Olga и записать его в отдельную переменную.
// let user = users.find(elem => elem.first_name == 'Olga');
// console.log(user);

// 6. Переместите первый элемент массива в конец
// let user_last = users.pop();
// let user_first = users.shift();
// users.push(user_first);
// users.unshift(user_last);
// console.log(users);

let firstElement = users[0];
users[0] = users[users.length - 1];
users[users.length - 1] = firstElement;
console.log(users);

//7. Сформировать массив из имен пользователей. Все имена в массиве должны быть с заглавной буквы. => ['Anton', 'Olga', 'Irina', 'Denis', 'Ivan']
let names = users.map(elem => elem.first_name.replace(elem.first_name[0],elem.first_name[0].toUpperCase()));
console.log(names);

const users_firstnames = users.map(el => el.first_name[0].toUpperCase() + el.first_name.slice(1));
