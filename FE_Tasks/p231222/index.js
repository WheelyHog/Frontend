
// const arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(elem => console.log(elem))
// arr.forEach((elem, index) => console.log(`${index}, ${elem}`))

// const arr = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Smith'}
// ]


// const ul = document.querySelector('ul');

// arr.forEach((elem) => {
//   const li = document.createElement('li');
//   li.innerText = `${elem.id}, ${elem.name}`
//   ul.append(li);
// })

// const arr = ['Bob', 'Bully', 'Amy', 'John']
// arr.sort();
// console.log(arr);

// const nums = [5,15,1,30]
// nums.sort((a,b) => b-a);
// console.log(nums);

// const people = [
//   {name: 'George', age: 30},
//   {name: 'Sarah', age: 17},
//   {name: 'Edward', age: 45},
//   {name: 'Anna', age: 23},
// ]

// people.sort((a,b) => a.age -b.age);
// people.sort((a, b) => {
//   let nameA = a.name.toLowerCase();
//   let nameB = b.name.toLowerCase();
//   if(nameA < nameB){
//     return -1
//   } else if (nameA > nameB){
//     return 1
//   } return 0
// })
// console.log(people);


// people.sort((a, b) => {
//   let nameA = a.name.toLowerCase();
//   let nameB = b.name.toLowerCase();
//   if (nameA < nameB) {
//     return -1; // по возрастанию
//   } else if (nameA > nameB) {
//     return 1; // по убыванию
//   } else {
//     return 0;
//   }
// });

// console.log(people);

// const names = [
//   {name: 'George', age: 30},
//   {name: 'Sarah', age: 17},
//   {name: 'Edward', age: 45},
//   {name: 'Anna', age: 23},
// ]

// Создадим массив, каждый элемент получается так - берем элемент из оригинального массива и умножаем на его порядковый номер(индекс)
// const nums = [1,2,5,6,7]
// let newNums = nums.map((elem, index) => {
//   return elem * index
// })
// console.log(newNums);

// const celsius = [-15, -5, 0, 1, 3, 15]
// let fahrenheit = celsius.map(elem => elem*1.8 + 32);
// console.log(fahrenheit);

// const negative = [-15, -2, -3, -4, -5]
// let positive = negative.map(elem => elem * -1);
// console.log(positive);

// const nums = [10,50,1,800,250,100,300]
// let bigNums = nums.filter(elem => elem >100);
// console.log(bigNums);

// const numbers = [1,2,4,5,6]
// let result = 0;
// numbers.forEach(elem => result += elem);
// console.log(result);

// let result2 = numbers.reduce((accum, elem) => accum + elem)
// console.log(result2);

// const arr = [1, 2, 3, 0, 4, 5, 6]
// let count = 1;
// const result = arr.reduceRight((sum, current) => {
//   if (sum > 10) {
//     console.log(count);
//     return
//   } else count++;
//   return sum + current;
// })

const arr = [1,-2,3,0,4,-5,6,-11]
// 1)оставить только положительные числа
// 2)создать массив, состоящий из квадратов этих чисел
let newarr = [];
arr.filter(elem => {
  if (elem > 0) {
    newarr.push(elem ** 2);
  }
})
console.log(newarr);