
const url = 'https://api.escuelajs.co/api/v1/products/'

export const getProducts = (callback) => {
  fetch(url)
    .then(res => res.json())
    .then(json => callback(json))
}


export const addProduct = (product) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(product)
  })
    .then(res => res.json())
    .then(json => console.log(json))
}