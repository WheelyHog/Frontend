const users = [
  {
    id: 1,
    first_name: "Bob",
    last_name: "Smith",
    age: 27,
    phone: "+334636363642",
    hair: "brown",
    order_date: "28-02-2020",
    order: "pen, book, smartphone",
    order_price: 1500,
    feedback: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him.",
    country: "USA",
    salary: 25000

  },
  {
    id: 2,
    first_name: "John",
    last_name: "doe",
    age: 37,
    phone: "+799696955245",
    hair: "black",
    order_date: "15-01-2019",
    order: "car, book",
    order_price: 270000,
    feedback: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time.",
    country: "Germany",
    salary: 80500
  },
  {
    id: 3,
    first_name: "Samantha",
    last_name: "Cooper",
    age: 25,
    phone: "+380669200242",
    hair: "grey",
    order_date: "",
    order: "",
    order_price: 0,
    feedback: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets.",
    country: "Poland",
    salary: 15000
  },
  {
    id: 4,
    first_name: "Homer",
    last_name: "Simson",
    age: 56,
    phone: "+956858473562",
    hair: "without hair",
    order_date: "28-02-2020",
    order: "water, whiskey, melon",
    order_price: 300,
    feedback: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request.",
    country: "France",
    salary: 4000
  },
]


// 1. создать и вывести массив пользователей в виде [{first_name, last_name, age}]
// let names = users.map(elem => {
//   return {first_name: elem.first_name, last_name: elem.last_name, age: elem.age};
// })
// console.log(names);

// 2. вывести тех пользователей, чьи номера телефонов заканчиваются на 2
// let people = users.filter(elem => elem.phone.endsWith('2')).map(elem => {
//   return {first_name: elem.first_name, last_name: elem.last_name, phone: elem.phone}
// });
// console.log(people);

// let names = [];
// users.forEach(elem => {
//   names.push({first_name:elem.first_name, last_name: elem.last_name, age: elem.age});
// })
// console.log(names);

// 3. вывести пользователей по возрасту в порядке возрастания.
// console.log(users.sort((a,b) => a.age - b.age).map(elem => elem.first_name));

// 4. посчитать сумму заказов всех пользователей
// let sum = users.reduce((accum, elem) => accum+elem.order_price,0);
// console.log(sum);

// 5. вывести тех пользователей, которые не делали покупок 28февраля 2020г.
// console.log(users.filter(elem => elem.order_date != '28-02-2020').map(elem => elem.first_name + ' ' + elem.last_name));

// 6. вывести самого старого пользователя и увеличить ему зарплату на 50
// console.log(users.sort((a,b) => b.age - a.age)[0].salary += 50);
// console.log(users);

// 7.проверить, кто из Украины("Ukraine"). Если таких нет, вывести сообщение "Героям Слава!"
//  let result = (users.some(elem => elem.country == 'Ukraine')) ? "Смерть Ворогам!" : 'Героям Слава!';
// console.log(result);

// 8.проверить, кто покупал книги, если такие есть, вывести в массив их цвет волос.
// result = users.filter(elem => elem.order.includes('book')).map(elem => elem.hair)
// console.log(result);

// 9. посчитать, сколько раз встречается слово "the" (независимо от регистра) в отзывах пользователей. результат вывести в формате "first_name last_name : ..." 
// let result = users.map(elem =>elem.feedback).map(elem => elem.split(' ')).map(elem => elem.reduce((accum, elem) => elem.toLowerCase() == 'the' ? accum +=1 : accum +=0, 0));
// console.log(result);

// 10. посчитать, хватит ли общей зарплаты для покупки мотоцикла стоимостью 180000. Ответ "хватит" или "не хватит"
// let result = users.reduce((accum, elem) => accum += elem.salary, 0) >= 180000 ? "хватит" : "не хватит";
// console.log(result);

sum_salary = 0;
// for (let i = 0; i < users.length; i++) {
// sum_salary += users[i].salary;
// }
// if(sum_salary >= 180000){
//   console.log('хватит');
// }else console.log('не хватит');

for(elem of users){
sum_salary = sum_salary + elem.salary
}
if(sum_salary >= 180000){
    console.log('хватит');
  }else console.log('не хватит');
