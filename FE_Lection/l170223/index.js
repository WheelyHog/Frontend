function fetchProducts() {
  let url = "https://dummyjson.com/products"
  fetch(url)
    .then(res => res.json())
    .then(data => render(data.products))
}

fetchProducts();

function render(data) {
  let div_root = document.querySelector('#root')
  let div_container = document.createElement('div')
  div_container.className = 'div_container'
  div_root.append(div_container)

  for (let elem of data) {
    let div_item = document.createElement('div')
    div_item.className = 'div_item'

    let img_elem = document.createElement('img')
    let p_title = document.createElement('p')
    let p_price = document.createElement('p')

    img_elem.src = elem.images[0]
  }
}