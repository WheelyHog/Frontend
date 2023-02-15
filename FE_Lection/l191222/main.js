// let arr = [1,2,3,4,5,6,7,8,9]

// let result = arr.filter((value) => value < 5)
// console.log(result);

// Задача
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных
// пример:
// let array = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]

// Результат:
// [true,false,true]
// let result = array.filter((value) => !Array.isArray(value))
// console.log(result);

// Задача 2
// Отфильтровать значения по условию - первая буква строки должна быть "А"
// Пример:
// let array = ['Арбуз', 'Антена','Бор','Арбуз','Сеть','Трон']

// Результат:
// ['Арбуз','Антена','Арбуз']

// let result = array.filter((value) => value[0] == "А")

// console.log(array.filter((value) => value.startsWith('А')));
// console.log(result);

// 1. Дан массив numbers. Создать новый массив и поместить в него все отрицательные числа из массива numbers

// let numbers = [3, 54, -1, 78, -13, -155];

// let result = numbers.filter((value) => value < 0)
// console.log(result);


// 2. Сформировать новый массив из чисел, кончающихся на 3

// let result = numbers.filter((value) => Math.abs(value % 10) == 3)


// 3. Узнать количество положительных чисел в массиве

// let result = numbers.filter((value) => value > 0)
// console.log(result.length);



//4. сформировать новый массив с числами, которые делятся на 5 без остатка
// let numbers_2 = [12, 36, 15, 68, 45, 60];
// let result = numbers_2.filter((value) => value % 5 == 0)


// 5. сформировать новый массив с числами, которые делятся на 3 и на 5 без остатка

// let result = numbers_2.filter((value) => value % 5 == 0 && value % 3 == 0)
// console.log(result);

// let greetings = ['hello', 'hi', 'good morning', 'good night', 'good afternoon'];

//6. Сформировать новый массив, в который попадут только строки длиннее 10 символов
// let result = greetings.filter((value) => value.length > 10)


// let users = [
//   ['Ivan', 'Ivanov', 34],
//   ['Irina', 'Petrova', 13],
//   ['Olga', 'Sidorova', 23],
//   ['Anton', 'Orlov', 17]
// ]
// let result = users.filter((value) => value[2] > 18)


// 8. Сформировать массив, в который попадут только числовые значения из массива array

// let array = ['hello', 15, true, 'hi', 177, 3];

// let result = array.filter(value => typeof(value) == "number")


// console.log(result);


// 9. Сформировать новый массив с совершеннолетними юзерами (>=18)

let fb_users = [
  {
    id: 1,
    name: 'Anton',
    age: 18
  },
  {
    id: 2,
    name: 'Irina',
    age: 50
  },
  {
    id: 3,
    name: 'Olga',
    age: 8
  },
  {
    id: 4,
    name: 'Oleg',
    age: 90
  }
]

let result = fb_users.filter(value => value.age >= 18);

console.log(result);