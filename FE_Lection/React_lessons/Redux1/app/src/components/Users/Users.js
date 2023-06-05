import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUserAction, fetchAddNewUserAction, removeUserAction } from '../../store/userReducer'
import { fetchUsersList } from '../../asyncActions/users'

export default function Users({ empl, users }) {



  useEffect(() => {
    localStorage.setItem('empl', JSON.stringify(empl))
  }, [empl])

  let dispatch = useDispatch()

  return (
    <div>
      {users.map(elem => <p key={elem.id} onClick={() => dispatch(removeUserAction(elem.id))}>{elem.name}</p>)}
      <button onClick={() => dispatch(addUserAction(prompt()))}>Add User</button>
      <button onClick={() => dispatch(fetchUsersList())}>Add User List</button>
      <button onClick={() => dispatch(fetchAddNewUserAction(prompt()))}>Add User By ID</button>
    </div>
  )
}
