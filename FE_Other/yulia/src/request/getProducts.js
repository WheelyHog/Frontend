
const url = 'https://fakestoreapi.com/products'

export const getProducts = (callback) => {
  fetch(url)
    .then(res => res.json())
    .then(json => callback(json))
}

// id

//   `${url}/${id}`