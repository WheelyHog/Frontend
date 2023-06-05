const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_NEW_USERS_LIST = 'ADD_NEW_USERS_LIST'
const ADD_USER_BY_ID = 'ADD_USER_BY_ID'


const defaultState = {
  users: [
    { id: 11, name: 'Steven William' },
    { id: 12, name: 'JohnSnow' },
    { id: 13, name: 'Neena Stolkovich' },
  ]
}

export const userReducer = (state = defaultState.users, action) => {

  switch (action.type) {
    case ADD_USER:
      const newUser = {
        id: Date.now(),
        name: action.payload,
      }
      return [...state, newUser]
    case REMOVE_USER:
      return state.filter(elem => elem.id !== action.payload)
    case ADD_NEW_USERS_LIST:
      return [...state, ...action.payload]
    case ADD_USER_BY_ID:
      return [...state, action.payload]
    default:
      return state;
  }

}

export const addUserAction = (payload) => ({ type: ADD_USER, payload })
export const removeUserAction = (payload) => ({ type: REMOVE_USER, payload })
export const addNewUserListAction = (payload) => ({ type: ADD_NEW_USERS_LIST, payload })
export const addUserByIdAction = (payload) => ({ type: ADD_NEW_USERS_LIST, payload })
export const fetchAddNewUserAction = (payload) => ({ type: ADD_USER_BY_ID, payload })