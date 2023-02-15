// POST 
// let url = 'http://51.250.8.198:8000/api/create/'

// let data = {
//       title: 'telran',
//       text: 'Тут был я))'
// }

// fetch(url, {
//       method: 'POST',
//       headers: {
//             'Content-Type': 'application/json;charset=utf-8' 
//       },
//       body: JSON.stringify(data)
// })

const delById = (id) => {
    let url = `http://51.250.8.198:8000/api/drop/${id}`
    fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json;charset=utf-8' }
    })
}
// delById(34)

// const createPost = (title, text) => {
//     let url = `http://51.250.8.198:8000/api/create/`
//     let data = {
//               title,
//               text
//         }
//         fetch(url, {
//                   method: 'POST',
//                   headers: {
//                         'Content-Type': 'application/json;charset=utf-8' 
//                   },
//                   body: JSON.stringify(data)
//             })
// }
// createPost('uniqueTitle', 'uniqueText')

// try {
//     let a = 10+b
// } catch (error) {
//     console.log('Error !');
// }
// console.log('Log 1');

// async function fetchUsers() {
//     try {
//         let url = 'https://jsonplaceholder.typicode.co/users'
//         let res = await fetch(url)
//         if(res.status >= 400){
//             console.log('No such users or bad link');
//         } else {
//             let data = await res.json()
//         console.log(data, res);
//         }

//     } catch(e)  {
//         console.log('Server not found');
//         console.log(e);
//     }

// }

// fetchUsers()

// let url = 'https://jsonplaceholder.typicode.com/user'
// fetch(url)
//     .then(res => {
//         if (res.status >= 400) {
//             console.log("User not exist or bad link");
//         } else {
//             return res.json()
//         }
//     })
//     .then(data => (data) ? console.log(data) : '')
//     .catch(() => console.log('Server not found'))

// Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет”. 
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>

// let div_root = document.getElementById('root')
// let userInfo = document.createElement('p')



let getId = (id) => {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`
    fetch(url)
        .then(res => {
            if (res.status >= 400) {
                console.log("User not exist");
            } else {
                return res.json();
            }
        })
        .then(data => {
            if (data) {
                let obj = {
                    user: {name: data.name, email: data.email}
                }
                

                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                    .then(res => {
                        return res.json()
                    })
                    .then(data => {
                        obj.posts = [...data]
                        console.log(obj)
                    })
            }
        })       
}
// getId(2)

// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) выводились все посты пользователя.
// Ссылка:
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

// Данные должны быть в виде объекта

// {
//  user: {name, email},
//  posts: [...]
// }

// домашка до среды!!!
// Реализуйте класс Student (студент), который будет иметь следующие свойства:
// name (имя), lastname(фамилия), major (специализация), grade (оценка)
// Реализйуте метод get_info (выводит в консоль строку 'Имя: <Имя>, Фамилия: <Фамилия>, Специализация <специализация>, Средний балл: <оценка>')
// Реализуйте методы change_grade_up и change_grade_down, которые будет изменять свойство grade на переданное значение

class Student {
    constructor(name, lastname, major, grade){
        this.name = name
        this.lastname = lastname
        this.major = major
        this.grade = grade
    }
    getInfo(){
        console.log(`Имя: ${this.name}, Фамилия: ${this.lastname}, Специализация: ${this.major}, Средний балл: ${this.grade}`);
    }
    change_grade_up(dx){
        this.grade += dx
    }
    change_grade_down(dx){
        this.grade -= dx
    }
}

let student1 = new Student('Ivan', 'Petrov', 'IT', 4.5);
student1.getInfo();
student1.change_grade_up(3)
student1.getInfo()
student1.change_grade_down(5)
student1.getInfo()