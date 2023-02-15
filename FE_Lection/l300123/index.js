// Задача 1
// 1) Создать класс Object2
// 2) Сделать полную копию метода values() примечание (метод должен быть статичным, метод должен передавать объект и возвращать новый массив)
// console.log(Object.values(user))
// console.log(Object2.values(user))

let user = {name: 'name', salary: 100, id: 1}

class Object2{
    static values(obj){
        let array  = []
        for(let key in obj){
            array.push(obj[key])
        }
        return array
    }
}

console.log(Object2.values(user))

// Задача:
// задан объект obj. Определите новое сво-во которое будет хранить разницу первого и последнего элемента массива array

// let obj = {
//     array: [50,40,30,10],
//    …
// }
