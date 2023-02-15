// let obj1 = {name: "Tigran", age: 30}
// let obj2 = {name: "Tigran", age: 30}

// console.log(obj1 == obj2);

// let obj2 = Object.assign({}, obj1);
// let obj2 = {...obj1}

// console.log(obj2);
// console.log(typeof JSON.stringify(obj2));
// let obj1Cope = JSON.parse(JSON.stringify(obj1));

// Задача 1
// Заданы три объекта: 
let user_11 = {id: 1}
let user_12 = {username: 'user'}
let user_2 = {
    id: 1,
    username: 'user'
}
// Задача: объедините user_11 и user_12 в один объект 
// и сравните результат с объектом user_2. 
// В качестве ответа необходимо получить булевый тип
// let user1 = Object.assign({}, user_11, user_12);
// console.log(user1);
// console.log(JSON.stringify(user1) === JSON.stringify(user_2) );

// ----------------
// Задача 2: 
// Напишите функцию checkObj(obj), которая проверяет, действительно 
// ли объект obj пустой {}. Функция должна вернуть булевый тип
// Подсказка: можно попробовать преобразовать объект в массив

// function checkObj (obj) {
//   return Object.keys(obj).length == 0
// } 
// function checkObj (obj) {
//   return JSON.stringify(obj) == '{}'
// } 
// console.log(checkObj({name: 'Sasha'}))

// Задача 3: 
// Напишите функцию checkObjectLength(obj1,obj2), которая принимает в 
// аргументе 2 объекта. Если у 1 и 2 объекта количество
// одинаковое - функция должна вернуть ответ true

// Пример: 
// checkObjectLength({test: 10}, {great: 12})
// Результат: true

// function checkObjectLength(obj1, obj2){
//   return Object.values(obj1).length == Object.values(obj2).length
// }
// console.log(checkObjectLength({test: 10}, {great: 12}))

// let array = [
//   {id : 1, name: 'Tigran'},
//   [2, 'Alex'],
//   {id: 3, name: 'Neena'},
//   [3, 'Steven']
// ]

// Задание: сформируйте из массива array два новых массива usersArray и usersObjs,
// элементы которых будут содержать вложенный массив и объект соответственно

// let arrObj = array.filter(elem => !Array.isArray(elem));
// let arrArr = array.filter(elem => Array.isArray(elem));
// array.forEach(elem => (Array.isArray(elem)) ? arrArr.push(elem) : arrObj.push(elem))
// console.log(arrObj);
// console.log(arrArr);

// let array = [2,3,4,5]
// let newArr = [10,20,30, ...array, 'boolean']
// console.log(newArr);

// ======================== TASKS ======================

