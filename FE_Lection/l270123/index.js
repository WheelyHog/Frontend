// --------
// let user1 = {
//     name: 'Alex',
//     age: 30,
//     salary: 1500,
//     sayHi(){
//         console.log(`Пользователь ${user1.name} говорит привет!`)
//     }
// }

// let user2 = {
//     name: 'Neena',
//     age: 25,
//     salary: 2000,
//     sayHi(){
//         console.log(`Пользователь ${user2.name} говорит привет!`)
//     }
// }

// user1.sayHi()
// user2.sayHi()
// ---------------------
// Шаблонизация через Function declaration
// function createUser(name, age, salary){
//   return {
//       name,
//       age,
//       salary,
//       sayHi(){
//           console.log(`Пользователь ${this.name} говорит привет!`)
//       }
//   }
// }


// class User {
//   constructor(name, age, salary){
//     this.name = name
//     this.age = age
//     this.salary = salary
//     this.isJob = true
//     this.run = 'YES'
//   }
// }

// let user1 = new User('Alex', 20, 1500);
// console.log(user1);

// Напишите класс MathNum, который будет определять в экземплярах: 
// 1) Свойство number - числовое значение
// 2) Метод quad(), который должен выводить в консоль квадрат сво-ва number
// 3) Метод sqrt(), который должен выводить в консоль корень сво-ва number

// class MathNum {
//   constructor(num){
//     if(typeof num != 'number'){
//       console.log('Is not a number');
//     } else {
//       this.num = num
//     }
//   }
//   quad(){
//     console.log(this.num**2);
//   }
//   sqrt(){
//     console.log(this.num**0.5);
//   }
// }

// let num = new MathNum(3);
// num.quad()
// num.sqrt()


