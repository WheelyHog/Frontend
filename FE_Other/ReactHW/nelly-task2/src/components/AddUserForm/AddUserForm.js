import React from 'react'
import s from './AddUserForm.module.css'

export default function AddUserForm({ addUser }) {
  return (
    <form className={s.form} onSubmit={(e) => addUser(e)}>
      <input type='text' placeholder='email' name='email' />
      <input type='text' placeholder='name' name='name' />
      <input type='text' placeholder='password' name='password' />
      <input type='text' placeholder='avatar' name='avatar' />
      <button>Add User</button>
    </form>
  )
}
