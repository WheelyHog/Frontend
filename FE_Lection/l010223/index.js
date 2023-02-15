class Drive{
    constructor(model){
        this.model = model
        this.speed = 0
    }
    driving(speed){
        this.speed = speed
        console.log(`${this.model} runs with  speed ${this.speed}`);
    }
    parking(){
        this.speed = 0
        console.log(`${this.model} parking`);
    }
}

// let car1 = new Drive('Tesla')
// car1.driving(60)
// car1.parking
// console.log(car1);
class Car extends Drive{
    constructor(model, lights){
        super()
        this.model = model
        this.lights = false
    }
    setLights(){
        this.lights = !this.lights
        console.log(`${this.model} ${this.lights ? 'turn on' : 'turn off'} lights`);
    }
}

// let car2 = new Car('Opel')
// car2.driving(100)
// car2.parking()
// car2.setLights()
// console.log(car2);

// Наследование классов

// class Drive{
//     constructor(model){
//         this.model = model
//         this.speed = 0
//     }
//     driving(speed){
//         this.speed = speed
//         console.log(`${this.model} едет со скоростью ${this.speed} км/ч`)
//     }
//     parking(){
//         this.speed = 0
//         console.log(`${this.model} припаркавался!`)
//     }
//     static staticProps = 'test'
// }

// let car1 = new Drive('Tesla')
// car1.driving(60)
// car1.parking()
// console.log(car1)

// Оператор extends позволяет указать имя наследумеого класса
// class Car extends Drive{
//     constructor(model){
//         // super() позволяет получить сво-ва наследуемого класса 
//         // обязетльное требование
//         super()
//         this.model = model,
//         this.lights = false
//     }
//     setLights(){
//         this.lights = !this.lights
//         console.log(`${this.model} ${(this.lights) ? 'включил/а': 'выключил/а'} фары`)
//     }
// }

//  console.log(Car.staticProps)
// let car2 = new Car('Opel')
// car2.driving(100)
// car2.parking()
// car2.setLights()
// car2.setLights()
// console.log(car2)

// let car3 = new Drive('BMW')
// console.log(car3)

// -------------------
// let obj2 = {
//     name: 'Tigran',
//     get readName(){
//         return 'Пользователь: ' + this.name
//     }
// }

// let obj1 = {
//     age: 10
// }

// let obj3  = Object.assign(obj1, obj2)

// // После копирования getter перестал быть getterom (стал обычном сво-вом)
// console.log(obj3)
// console.log(obj1 == obj3)

// ----------------------------
// Флаги (дескрипторы) сво-ств объекта

let obj = {
    name: 'Tigran',
    salary: 1000,
    age: 30,
    job_id: 'it_prog',
}

// Метод Object.getOwnPropertyDescriptor(obj,'name') позволяет получить состояние 
// всех флагов дескрипторов для указанного свойства

// console.log(Object.getOwnPropertyDescriptor(obj,'name'))

// -----
// writable     - право на изменение значения свойства
// enumerable   - право на итерацию в цикле (спрятать сво-во)
// configurable - право на удаление и изменение этого же флага в дальнейшем


// -------
// Метод Object.defineProperty(obj,'name', {}) позволяет изменить флаги дескрипторов

// Object.defineProperty(obj,'name', {configurable: false, })
// // Object.defineProperty(obj,'name', {configurable: true})

// console.log(Object.getOwnPropertyDescriptor(obj,'name'))

// obj.name = 'Alex'

// console.log(obj)

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))

// setTimeout(() => {
//     console.log(1);
// }, 2000)

// setTimeout(() => {
//     console.log('block 1');
// }, Math.random() * 30)

// ==================== tasks ==============

// let a = 44;
// let my_promise= new Promise((res, rej) => {
//     setTimeout(() => {
//         res(a = 33);
//     }, 2000);
// });

// my_promise.then (() => console.log(a));

// const random_promise = new Promise((resolve, reject) => {
//     const random_num = Math.random();
//     if(Math.random() >= 0.5){
//         resolve(random_num)
//     } else {
//         reject(random_num)
//     }
// })

// random_promise.then(
//     (value) => console.log(value + 'Well'),
//     (value) => console.log('Bad' + value)
// )

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(json => console.log(json))