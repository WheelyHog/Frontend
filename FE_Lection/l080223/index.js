// let getId = (id) => {
//   let url = `https://jsonplaceholder.typicode.com/users/${id}`
//   fetch(url)
//     .then(res => {
//       if (res.status >= 400) {
//         console.log("User not exist");
//       } else {
//         return res.json();
//       }
//     })
//     .then(data => {
//       if (data) {
//         let obj = {
//           user: { name: data.name, email: data.email }
//         }
//         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//           .then(res => {
//             return res.json()
//           })
//           .then(data => {
//             obj.posts = [...data]
//             console.log(obj)
//           })
//       }
//     })
// }
// getId(2)

// Решение 1

// const getUserById = (id) => {
//     let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`
//     let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
//     fetch(urlUser)
//         .then(res => (res.status == 404) ? console.log('Такого пользователя нет') : res.json())
//         .then(data => {
//             if (data){
//                 let userPosts = {
//                     user: {name: data.name, email: data.email},
//                     posts: []
//                 }
//                 fetch(urlPost)
//                     .then(res => res.json())
//                     .then(data => {
//                        userPosts.posts = [...data]
//                        console.log(userPosts)
//                     })
//             }
//         })
// }

// Решение 2

async function getUserById(id) {
  let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`
  let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  let resUser = await fetch(urlUser)
  if (resUser.status == 404) {
    // console.log('Такого пользователя нет')
    getErrorMessage('Такого пользователя нет')
    return
  }
  let dataUser = await resUser.json()
  let dataPosts = await fetch(urlPost).then(res => res.json())
  let userPosts = {
    user: { name: dataUser.name, email: dataUser.email },
    posts: [...dataPosts]
  }
  render(userPosts)
}
getUserById(1)


// Создать функцию, которая генерирует div с данными о пользователе и всеми его постами. Возвращаемая карточка должна иметь следующую структуру.

// <div class=”user-container”>
//  <div class=”user”>
//   <p>Имя пользователя</p>
//   <p>Почта пользователя</p>
//  </div>
//  <div class=”posts”>
//   <div class=”item”>
//    <p>Название поста</p>
//    <p>Текст поста</p>
//   </div>
//   <div class=”item”>
//    <p>Название поста</p>
//    <p>Текст поста</p>
//   </div>
//   ….….
//  </div>
// </div>
let root = document.getElementById('root')

let container = document.createElement('div')
container.classList.add('user-container')

let userDiv = document.createElement('div')
userDiv.classList.add('user')

function render(userPosts) {


  let userName = document.createElement('p')
  userName.innerText = userPosts.user.name

  let userEmail = document.createElement('p')
  userEmail.innerText = userPosts.user.email

  let posts = document.createElement('div')
  posts.classList.add('posts')

  userDiv.append(userName, userEmail)
  container.append(userDiv, posts)
  root.append(container)

  // console.log(userPosts.posts[3].title)

  for (index in userPosts.posts) {
    let item = document.createElement('div')
    item.classList.add('item')

    let postTitle = document.createElement('h3')
    postTitle.innerText = userPosts.posts[index].title

    let postText = document.createElement('p')
    postText.innerText = userPosts.posts[index].body

    item.append(postTitle, postText)
    posts.append(item)
  }
}

function getErrorMessage(text) {
  let errorMsg = document.createElement('p')
  errorMsg.innerText = 'Такого пользователя нет'

  userDiv.append(errorMsg);
  container.append(userDiv)
  root.append(container)
}

function getId() {
  let currentId = 1;
  let btnPrev = document.querySelector('.prev')
  let btnNext = document.querySelector('.next')
  let indicator = document.querySelector('.indicator')

  btnPrev.onclick = () => {
    container.innerHTML = '';
    userDiv.innerHTML = '';
    currentId--;
    if (currentId <= 0) {
      currentId = 1
    }
    getUserById(currentId)
    indicator.innerText = `UserID: ${currentId}`;
  }
  btnNext.onclick = () => {
    container.innerHTML = '';
    userDiv.innerHTML = '';
    currentId++;
    indicator.innerText = `UserID: ${currentId}`;
    getUserById(currentId)
  }
}
getId();