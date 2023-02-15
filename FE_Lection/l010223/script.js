// 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/users
// 2. Из полученного массива для каждого юзера сформировать карточку с именем, фамилией и юзернэймом

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => render_users(json));

const rootElem = document.querySelector('.root')

const render_users = json => {
    json.sort((a, b) => a.username.localeCompare(b.username))
        .forEach(({ name, username }) => {
            const cardElem = document.createElement('div')
            const nameElem = document.createElement('p')
            const usernameElem = document.createElement('p')
            // const ageElem = document.createElement('p')

            nameElem.innerText = `Name: ${name}`;
            usernameElem.innerText = `Username: ${username}`

            cardElem.append(nameElem, usernameElem)
            rootElem.append(cardElem)
        });
}


// Реализуйте класс Student (студент), который будет иметь следующие свойства: 
// name (имя), lastname(фамилия), major (специализация), grade (оценка)
// Реализйуте метод get_info (выводит в консоль строку 'Имя: <Имя>, Фамилия: <Фамилия>, Специализация <специализация>, Средний балл: <оценка>')
// Реализуйте методы change_grade_up и change_grade_down, которые будет изменять свойство grade на переданное значение