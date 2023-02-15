const products = [
  {
    id: 1,
    title: 'Apple',
    price: 500,
    discount: 0.15
  },
  {
    id: 2,
    title: 'Orange',
    price: 400,
    discount: 0.05
  },
  {
    id: 3,
    title: 'Pineapple',
    price: 560,
    discount: 0.25
  },
  {
    id: 4,
    title: 'Kiwi',
    price: 50,
    discount: 0.1
  },
  {
    id: 5,
    title: 'Lime',
    price: 120,
    discount: 0.07
  }
]

const product =
{
  id: 1,
  title: 'Apple',
  price: 500,
  discount: 0.15
}

let { title, price } = product;
// 1. Используя объект product, для товара создать карточку (title, price)
const root = document.querySelector(".root");
// const card = document.createElement('div');
// const titleElem = document.createElement('p');
// const priceElem = document.createElement('p');

// titleElem.innerText = `Title: ${title}`;
// priceElem.innerText = `Price: ${price}`;

// card.append(titleElem, priceElem);
// root.append(card);


// 2. Используя массив products, для каждого товара создать карточку (title, price)

// products.forEach(({title, price}) => {

//   const card = document.createElement('div');
//   const titleElem = document.createElement('p');
//   const priceElem = document.createElement('p');

//   titleElem.innerText = `Title: ${title}`;
//   priceElem.innerText = `Price: ${price}`;

//   card.append(titleElem, priceElem);
//   root.append(card);
// })

// cards = products.map(({title, price}) => {

//   const card = document.createElement('div');
//   const titleElem = document.createElement('p');
//   const priceElem = document.createElement('p');

//   titleElem.innerText = `Title: ${title}`;
//   priceElem.innerText = `Price: ${price}`;

//   card.append(titleElem, priceElem);

//   return card
// })
// root.append(...cards);

// console.log(...cards);

// 4. Используя массив products, для каждого товара, цена которого больше или равно 500, создайте карточку товара со следующей информацией - Наименование, старая цена, цена со скидкой. Стилизовать старую цену - сделать ее серого цвета. А новую цену - красного цвета и крупнее шрифт
cards = products.filter(({ price }) => price >= 500)

cards.forEach(({title, price, discount}) => {

  const card = document.createElement('div');
  const titleElem = document.createElement('p');
  const oldPriceElem = document.createElement('p');
  const priceElem = document.createElement('p');

const newPrice = price - price * discount;

  titleElem.innerText = `Title: ${title}`;
  oldPriceElem.innerText = `Old Price: ${price}`;
  oldPriceElem.style.color = 'grey';
  priceElem.innerText = `Price: ${newPrice}`;
  priceElem.style.color = newPrice > 423 ? 'red' : 'green';
  priceElem.style.fontSize = "20px"

  card.append(titleElem, oldPriceElem, priceElem);
  root.append(card);
});

