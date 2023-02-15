class Car  {
    constructor (company_name, model, color, country, volume){
        this.company_name = company_name
    this.model = model
    this.color = color
    this.country = country
    this.volume = volume
    } 
    get_car_info() {
        return `Модель (${this.company_name}, ${this.country}): ${this.volume}`
    }  
}

// let volvo = new Car('Volvo', 'cx5000', 'red', 'Germany', 3000);

// console.log(volvo.company_name, volvo.model, volvo.color, volvo.country, volvo.volume)
// console.log(volvo.get_car_info());

class Group{
    constructor(name, major, number = 15){
        this.name = name
        this.major = major
        this.number = number
    }
    add_student(){
        this.number += 1
    }
    delete_student(){
        this.number -= 1
    }
}

const group1 = new Group('33-32', 'SQL', 22)
const group2 = new Group('35-37', 'JS')

// console.log(group1)
// console.log(group2)
// group1.add_student()
// group1.add_student()
// console.log(group1)
// group2.delete_student()
// console.log(group2)

class Worker{
    constructor(name, surname, rate, days){
        this.name = name
        this.surname =surname
        this.rate = rate
        this.days =days
    }
    getSalary(){
        return this.rate * this.days 
    }
    add_days(amount){
        this.days += amount
    }
    delete_days(amount){
        this.days -= amount
    }
}

let farmer = new Worker('Alex', 'Ivanov', 50, 20)
let worker1 = new Worker('Sasha', 'Petrov', 20, 10)

console.log(farmer.name, farmer.getSalary())

console.log(farmer.getSalary() + worker1.getSalary())

farmer.add_days(5)
console.log(farmer.days)

worker1.delete_days(5)
console.log(worker1.days)