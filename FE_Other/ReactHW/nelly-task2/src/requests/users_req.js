const url = 'https://api.escuelajs.co/api/v1/users/';

export const getUsers = (callback) => {
  fetch(url)
    .then(res => res.json())
    .then(json => callback(json))
}

export const add_User = (user, callback) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(json => callback(json))

}