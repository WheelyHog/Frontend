// Отсортируйте массив в рандомном порядке
// let array = [1,2,3,4,5,6,7,8,9,10];

// const res = array.sort(() => 0.5 - Math.random());
// console.log(res);

// let users = [
//     {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
//     {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 33},
//     {id: 3, name: 'Steven', lastname: 'Fersters', age: 35},
//     {id: 4, name: 'Neena', lastname: 'Maxwell', age: 31},
// ]
// // Найдите пользователся, id которого представляется в виде четного числа, а возраст менее 33

// console.log(users.find(elem => (elem.id % 2 == 0 && elem.age < 33)));

// 1) Определите наличие одного элемента, чей квадратный корень цены будет вычисляться без остатка. Выведите булевый тип
// 2) Определите, у всех ли элементов массива сво-во count отличимо от 0

// let data = [
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
//     {id : 4, goods: 'Ракетки', count: 30, price: 100},
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000}
// ]

// let res = data.some(elem => Math.sqrt(elem.price) % 1 == 0 ? true : false);
// console.log(res);

// let res2 = data.every(elem => elem.count != 0);
// console.log(res2);

// Повторить метод some(), сформировав функцию some2(array, callback)
// Функция должна вернуть булевый тип

// function some2 (array, callback){
// for(i = 0; i < array.length; i++){
//   if(callback(array[i])){
//     console.log('true');
//     break
//   }else console.log(-1);
// }
// }
// some2(data, (value) => value.price > 1000)

// Дан массив с числами
// let numbers = [3, -10, 7, 0, -50, 67, -47, 4, 564];
// 1. Сформировать массив, в который попадут все положительные числа, заканчивающиеся на 7
// console.log(numbers.filter(elem => elem > 0 && elem % 10 == 7));

// 2. Написать программу, высчитывающую количество положительных чисел в массиве => 5
// console.log(numbers.reduce((accum, elem) => elem >= 5 ? accum+=1 : accum+=0, 0));

// Дан массив с числами
// let numbers2 = [4, 16, -5, 9, -81, 100, -49];

// 3. Сформируйте массив из положительных чисел. Извлеките из каждого значения квадратный корень. Отсортируйте полученные числа в массиве в порядке возрастания.
// => [2, 3, 4, 10]

// let res = numbers2.filter(elem => elem > 0).map(elem => elem ** .5).sort((a,b) => a - b)
// console.log(res);

// Дан массив с разными типами данных
// 4. Сформировать массив из строк. Если елемент не строка, подставить вместо него строку 'not a string'
// let elements = [true, 'hello', 'apple', 4, undefined, 'banana', -7];

// let res = elements.map(elem => typeof(elem) != 'string' ? 'not a string' : elem)
// console.log(res);

// Дан массив с числами

const nums = [1, 2, 3, 4]; 

// 5. Найти среднеарифметическое число => 2.5

let res = nums.reduce((accum, elem) => accum += elem) / nums.length;
console.log(res);