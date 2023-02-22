// console.log(localStorage);

// localStorage.setItem('user', 'Vasya')

localStorage.removeItem('user')

// console.log(localStorage.getItem('user'))
// console.log(localStorage.key('0'))

// let obj = {
//   name: "Alex",
//   age: 26,
//   salary: 1500
// }

// localStorage.setItem('form', JSON.stringify(obj))

// // Задача. Опишите две функции: writeLocalStorage и readLocalStorage. Функции должны записывать или считывать объекты в localStorage соответственно.

// let key = 'user'
// let writeLocalStorage = (key) => {
//   localStorage.setItem(key, JSON.stringify(obj))
// }

// let readLocalStorage = () => {
//   let res = JSON.parse(localStorage.getItem(key))
//   console.log(res)
//   return res
// }

// writeLocalStorage(key)
// readLocalStorage(key)

// ===================================================

let form = document.querySelector('#form_elem')
let div_root = document.querySelector('#root')
let div_container = document.createElement('div')
div_container.className = 'users_container'
div_root.append(div_container)

let storageData = JSON.parse(localStorage.getItem('users'))
let users = storageData ?? [];
render(users)

// form.onsubmit = (e) => {
//   e.preventDefault();
//   let user = {};
//   user.name = form['name'].value
//   user.surname = form['surname'].value
//   localStorage.setItem('data', JSON.stringify(user))
// }

form.onsubmit = (e) => {
  e.preventDefault()
  let dataList = new FormData(e.target)
  // localStorage.setItem('data', JSON.stringify(Object.fromEntries(data)))
  let data = Object.fromEntries(dataList)
  users.push(data)
  localStorage.setItem('users', JSON.stringify(users))
  render(users)
  form.reset()
}

function render(array) {
  div_container.innerHTML = ''
  for (let elem of array) {
    let div_card = document.createElement('div')
    let p_fullname = document.createElement('p')

    div_card.className = 'user_card'
    p_fullname.innerText = `${elem.name} ${elem.lastname}`

    div_card.append(p_fullname)
    div_container.append(div_card)
  }
}

let del_btn = document.createElement('button')
del_btn.innerText = 'Delete All Users'
div_root.before(del_btn)
del_btn.onclick = () => {
  localStorage.removeItem('users')
  users = []
  render(users)
}
