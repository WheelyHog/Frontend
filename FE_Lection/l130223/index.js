// Задание 1. 
// 1. Создайте ul список внутри body и поместите туда 3 li элемента с текстовым сво-вом (1,2,3)

// let list = document.createElement('ul')
// for (let i = 1; i <= 3; ++i) {
//   let li = document.createElement('li')
//   li.innerText = i
//   list.append(li)
// }
// document.body.prepend(list)

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.nextElementSibling);
// console.log(document.body.nextSibling);
// console.log(document.body.previousElementSibling);
// console.log(document.body.previousSibling);
// console.log(document.body.parentElement);

// ------------------------
// задание 1
// Сформировать содержимое li элемента в полужирный шрифт

// задание 2
// Заменить содержимое заголовка h2 на обычный текст



let li = document.body.firstElementChild.firstElementChild.lastElementChild.style.fontWeight = "bold"
let header = document.body.firstElementChild.nextElementSibling
header.replaceChild('h2', 'p')
console.log(li);
console.log(header);