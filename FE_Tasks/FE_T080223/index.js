// 1. Написать fetch-запрос по ссылке https://reqres.in/api/users?page=1 и выводить на страницу карточку с пользователем (картинка + имя)
async function getUsers(pageNum) {
  let urlUser = `https://reqres.in/api/users?page=${pageNum}`
  let resUser = await fetch(urlUser)
  if (resUser.status == 404) {
    console.log('Такого пользователя нет')
    return
  }
  let dataUser = await resUser.json()

  render(dataUser)
}

render = (dataUser) => {
  let container = document.querySelector('.users-container')
  container.innerHTML = '';
  for (index in dataUser.data) {
    let userDiv = document.createElement('div')
    let userImg = document.createElement('img')
    userImg.src = dataUser.data[index].avatar
    let userName = document.createElement('p')
    userName.innerText = dataUser.data[index].first_name
    userDiv.append(userImg, userName)
    container.append(userDiv)
  }
}

trigger = () => {
  let pageNum = 1;
  let buttonList = document.getElementsByTagName('button')
  for (button of buttonList) {
    button.onclick = (event) => {
      pageNum = event.target.innerText;
      getUsers(pageNum)
    }
  }
}

getUsers(1)
trigger()





// const users_container = document.querySelector('.users_container');

// const render = users => {
//   const users_cards = users.map(({ first_name, avatar }) => {
//     const card = document.createElement('div');
//     const avatarElem = document.createElement('img');
//     const nameElem = document.createElement('p');

//     avatarElem.setAttribute('src', avatar);
//     avatarElem.setAttribute('alt', first_name);

//     nameElem.innerText = first_name;

//     card.append(avatarElem, nameElem);
//     return card
//   });
//   users_container.append(...users_cards)
// }

// render(users)

// fetch('https://reqres.in/api/users?page=1')
//   .then(res => res.json())
//   .then(json => render(json.data))

