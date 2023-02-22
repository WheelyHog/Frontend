// 1. Написать функцию, которая принимает айди в качества аргумента и при вызове которой отправляется fetch-запрос по ссылке https://dummyjson.com/users/id
// 2. Выести ответ по запросу в консоль
// 3. Из полученных данных сформировать карточку юзера: фото, имя, фамилия, возраст, почта
// 4. Стилизовать карточку. Если возраст человека >= 18, то цвет карточки сделать светло-зеленым, если меньше - светло-серым

// const getUsers = () => {
//   fetch(`https://dummyjson.com/users`)
//     .then(res => res.json())
//     .then(json => render(json.users))
// }
// getUsers()

// let container = document.querySelector('#root')

// const render = (users) => {
//   users.forEach(user => {
//     let card = document.createElement('div');
//     if (user.age <= 28) {
//       card.style.backgroundColor = 'lightgreen';
//     } else {
//       card.style.backgroundColor = 'lightgrey';
//     }
//     card.style.border = '1px solid grey';
//     card.style.borderRadius = '20px'
//     card.style.padding = '10px'

//     let img = document.createElement('img');
//     img.style.width = '100%';
//     let userninfo = document.createElement('p');

//     img.src = user.image;
//     userninfo.innerText = `name: ${user.firstName}, lastname: ${user.lastName}, age: ${user.age}, email: ${user.email}`
//     card.append(img, userninfo)
//     container.append(card)
//   });
// }

// 5. Добавить две кнопки < > в html-документ
// 6. При перезагрузке странице прогружается первый юзер
// 7. При клике на правую кнопку айдишник увеличивается на 1 и отправлется новый запрос с измененным значением айди. При клике на левую - уменьшается на 1 и отправляется новый запрос

let id = 1;
const getUser = id => {
  fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(json => user_render(json))
}

// let [btnPrev, btnNext] = document.querySelectorAll('button');
// btnPrev.onclick = () => {
//   id--;
//   if (id == 1) {
//     id = 30
//   }
//   user_container.innerHTML = '';
//   getUser(id)
// };

// btnNext.onclick = () => {
//   id++;
//   if (id == 30) {
//     id = 1
//   }
//   user_container.innerHTML = '';
//   getUser(id)
// }


getUser(1);

const user_container = document.querySelector('.user_container');

const user_render = ({ firstName, lastName, age, image, email }) => {
  const user_card = document.createElement('div');
  const user_avatar = document.createElement('img');
  const user_name = document.createElement('p');
  const user_age = document.createElement('p');
  const user_email = document.createElement('a');

  user_name.innerText = `User: ${firstName} ${lastName}`;
  user_age.innerText = `Age: ${age}`;
  user_email.innerText = email;

  user_email.setAttribute('href', `mailto:${email}`);
  user_avatar.setAttribute('src', image);
  user_avatar.setAttribute('alt', `${firstName} ${lastName}`);

  user_card.classList.add('user_card');
  user_card.style.backgroundColor = age >= 30 ? 'lightgreen' : 'lightgray';

  user_card.append(user_avatar, user_name, user_age, user_email);
  user_container.append(user_card);
}

let form = document.querySelector('.user-form')
form.addEventListener('submit', event => {
  event.preventDefault();
  id = event.target.id.value;
  user_container.innerHTML = '';
  getUser(id)
})
