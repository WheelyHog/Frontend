// 1. Дан массив. Сформировать новый массив, в который попадут только имена, длина которых равна 4 символам. Записать этот массив в локал сторадж.

// const firstnames = ['Anton', 'Irina', 'Olga', 'Ivan', 'Antonina'];

// localStorage.setItem('users', firstnames.filter(elem => elem.length == 4))

// 2. Дан массив с товарами. Сформировать карточки товаров и отобразить их в браузере

const goods = [
  {
    id: 1,
    product: 'iPhone 14',
    price: 1500,
    in_stock: true
  },
  {
    id: 2,
    product: 'Samsung A53',
    price: 1000,
    in_stock: true
  },
  {
    id: 3,
    product: 'Huawei 11',
    price: 900,
    in_stock: true
  },
  {
    id: 4,
    product: 'Nokia N4',
    price: 500,
    in_stock: false
  },
  {
    id: 5,
    product: 'iPhone 12',
    price: 1100,
    in_stock: false
  }
]

let div_root = document.querySelector('#root')
goods.forEach(({ product, price, in_stock }) => {
  let card = document.createElement('div')
  card.className = 'card'

  let card_title = document.createElement('h4')
  card_title.innerText = `Title: ${product}`

  let card_price = document.createElement('p')
  card_price.innerText = `Price: ${price}`

  let card_in_stock = document.createElement('p')
  card_in_stock.innerText = `Is available: ${in_stock}`

  card.append(card_title, card_price, card_in_stock)
  div_root.append(card)
})

// Добавить форму с двумя инпутами для сбора данных о названии продукта и его цене. По умолчанию все добавляемые продукты долдны иметь свойство in_stock со значением true
// При отправке формы выводить собранные данные из формы в консоль в виде объекта

let form = document.querySelector('#form_elem')
form.onsubmit = (e) => {
  e.preventDefault()

  // const { product, price } = event.target

  let productItem = {}
  productItem.id = Date.now()
  productItem.product = form['product'].value
  productItem.price = form['price'].value
  productItem.in_stock = 'true'
  localStorage.setItem('goods', JSON.stringify(productItem))

  let card = document.createElement('div')
  card.className = 'card'

  let card_title = document.createElement('h4')
  card_title.innerText = `Title: ${form['product'].value}`

  let card_price = document.createElement('p')
  card_price.innerText = `Price: ${form['price'].value}`

  let card_in_stock = document.createElement('p')
  card_in_stock.innerText = `Is available: true`

  card.append(card_title, card_price, card_in_stock)
  div_root.append(card)
}

// При отправке формы, отрисовывалась карточка из собранных данных

// При обновлении страницы добавленные карточки не пропадают



