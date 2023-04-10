
const url = 'https://dummyjson.com/todos'

export const getTodos = (callback) => {
  fetch(url)
    .then(res => res.json())
    .then(json => callback(json.todos))
}


