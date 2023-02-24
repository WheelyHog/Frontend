// 1. Отправить запрос на https://fakestoreapi.com/products и вывести в консоль полученный ответ (в формате JSON)
// 2. В html-документе создать контейнер для карточек товаров
// 3. В js-файле для каждого товара отрисовать карточку (image, title, price), добавить все карточки в контейнер
// 4. Стилизовать карточки
// 5. Создать форму, которая собирает данные о товаре (title, price, image). При отправке формы выводить в консоль собранные данные в формате объекта
// 6. Стилизовать форму

let div_root = document.querySelector('#root')

fetch(`https://fakestoreapi.com/products`)
  .then(res => res.json())
  .then(json => render(json))

function render(products) {
  products.forEach(({ image, title, price }) => {
    let card = document.createElement('div')
    card.className = 'card'

    let cardImg = document.createElement('img')
    cardImg.src = image
    cardImg.className = 'card-image'

    let cardTitle = document.createElement('h4')
    cardTitle.innerText = `${title}`

    let cardPrice = document.createElement('p')
    cardPrice.innerText = `Price: ${price} $`

    card.append(cardImg, cardTitle, cardPrice)
    div_root.append(card)
  });
}

let form = document.querySelector('.products-form')
let product = {}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  product.title = event.target.title.value
  product.price = +event.target.price.value
  product.image = event.target.path.value
  product.category = 'vehicles'
  console.log(product);
})

// fetch('https://fakestoreapi.com/products',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     title: 'test product',
//                     price: 13.5,
//                     description: 'lorem ipsum set',
//                     image: 'https://i.pravatar.cc',
//                     category: 'electronic'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))