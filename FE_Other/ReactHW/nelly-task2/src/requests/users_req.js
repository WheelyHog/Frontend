const url = ' https://api.escuelajs.co/api/v1/users';

export const getUsers = (callback) => {
  fetch(url)
    .then(res => res.json())
    .then(json => callback(json))
}