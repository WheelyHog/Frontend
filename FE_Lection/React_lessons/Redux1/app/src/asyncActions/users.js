import { addNewUserListAction, fetchAddNewUserAction } from "../store/userReducer"


export const fetchUsersList = () => {
  return function (dispatch) {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(addNewUserListAction(data)))
  }
}


export const fetchAddNewUser = (id) => {
  return function (dispatch) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(fetchAddNewUserAction(data)))
  }
}

