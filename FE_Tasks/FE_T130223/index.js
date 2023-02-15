// 1. Написать функцию, которая принимает id и при вызове которой отправляется fetch - запрос по адресу https://jsonplaceholder.typicode.com/users/id
// 2. Вывести в консоль то, что придет по запросу
// 3. Через дом наполнить users_container данными, полученными из ответа на запрос - отобразить в браузере имя и телефон пользователя
// 4. На кпоки повесить слушатели событий. при клике на левую мы отправляем запрос на id текущего юзера - 1, при клике на праву - на id текущего юзера + 1


// async function getUsers(id) {
//   let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`
//   let resUser = await fetch(urlUser)
//   if (resUser.status == 404) {
//     console.log('Такого пользователя нет')
//     return
//   }
//   let dataUser = await resUser.json()
//   let userContainer = document.querySelector('.users-container')


//   userDiv.innerText = '';
//   let userP = document.createElement('p')
//   userP.innerText = `${dataUser.name}, ${dataUser.phone}`
//   userDiv.append(userP)
//   userContainer.prepend(userDiv)
//   console.log(dataUser.name)
// }

// let userDiv = document.createElement('div')
// userDiv.classList.add('user-div')

// let currentUser = 1;
// let btnList = document.querySelector('.triggers');
// [btnPrev, btnNext] = [btnList.firstElementChild, btnList.lastElementChild]

// btnPrev.onclick = () => {
//   currentUser--
//   getUsers(currentUser)
// }
// btnNext.onclick = () => {
//   currentUser++
//   getUsers(currentUser)
// }



// getUsers(1)
// 1. Написать функцию, при вызове которой отправляется fetch-запрос по адресу https://jsonplaceholder.typicode.com/todos
// 2. Вывести в консоль то, что придет по запросу
// 3. Наполнить контейнер карточками с двумя параграфами (task и status). В status выводить текст 'done', если задача выполнена, и 'not done' - если не выполнена

const todos_container = document.querySelector('.todos_container')

const render = json => {
  const todos_cards = json.map(({ title, completed }) => {
    const card = document.createElement('div');
    const task = document.createElement('p');
    const status = document.createElement('p');

    if (completed) {
      statusText = 'done';
      card.style.backgroundColor = 'lightgreen'
    } else {
      statusText = 'not done';
      card.style.backgroundColor = 'lightgrey'
    }
    card.style.border = '1px solid grey'
    card.style.borderRadius = '10px'
    card.style.padding = '10px'

    task.innerText = `Task: ${title}`;
    status.innerText = `Status: ${statusText}`

    card.append(task, status)
    return card
  })
  todos_container.append(...todos_cards)
}


const getAllTasks = id => {
  fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => res.json())
    .then(json => render(json))
}

getAllTasks()