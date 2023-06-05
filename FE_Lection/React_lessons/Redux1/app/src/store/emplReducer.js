const data = [
  { id: 1, name: 'Alex', age: 19 },
  { id: 2, name: 'Steven', age: 23 },
  { id: 3, name: 'Neena', age: 25 },
  { id: 4, name: 'John', age: 40 },
  { id: 5, name: 'Lui', age: 43 },
]

const defaultState = (JSON.parse(localStorage.getItem('empl'))) ?? data

const DEL_FIRST_EMPL = 'DEL_FIRST_EMPL'
const DEL_LAST_EMPL = 'DEL_LAST_EMPL'
const ADD_NEW_EMPL = 'ADD_NEW_EMPL'
const DEL_BY_DBLCLICK = 'DEL_BY_DBLCLICK'
const ADD_TO_AGE = 'ADD_TO_AGE'
const NULL_AGE = 'NULL_AGE'

export const emplReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DEL_FIRST_EMPL:
      return state.filter((elem, index) => index !== 0)
    case DEL_LAST_EMPL:
      return state.filter((elem, index) => index !== state.length - 1)
    case ADD_NEW_EMPL:
      let [name, age] = action.payload.split(' ')
      const findElem = state.findIndex(elem => elem.name === name)
      if (findElem !== -1) {
        return state.map((elem, index) => {
          if (index === findElem) {
            elem.age = (isNaN(+age)) ? 0 : +age
          }
          return elem
        })
      } else {
        const newUser = {
          id: Date.now(),
          name,
          age: (isNaN(+age)) ? 0 : +age
        }
        return [...state, newUser]
      }
    case DEL_BY_DBLCLICK:
      const id = action.payload
      return state.filter((elem) => elem.id !== id)
    case ADD_TO_AGE:
      return state.map(elem => ({ ...elem, age: elem.age + action.payload }))
    case NULL_AGE:
      return state.map(elem => ({ ...elem, age: 0 }))
    default:
      return state
  }
}

export const delFirstEmplAction = () => ({ type: DEL_FIRST_EMPL })
export const delLastEmplAction = () => ({ type: DEL_LAST_EMPL })
export const addNewEmplAction = (payload) => ({ type: ADD_NEW_EMPL, payload })
export const delByDblClickAction = (payload) => ({ type: DEL_BY_DBLCLICK, payload })
export const addToAgeAction = (payload) => ({ type: ADD_TO_AGE, payload })
export const nullAgeAction = () => ({ type: NULL_AGE })