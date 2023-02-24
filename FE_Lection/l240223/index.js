let menu = document.querySelector('.menu')
let content = document.querySelector('.content')
menu.addEventListener('click', () => console.log(123))

function open_menu() {
  let menu_elems = ['Home', 'About', 'Contacts', 'Q&A', 'Authorisation']
  let modal_div = document.createElement('div')
  modal_div.className = 'modal'

  for (let elem of menu_elems) {
    let p_elem = document.createElement('p')
    p_elem.innerText = elem
    modal_div.append(p_elem)
  }
}