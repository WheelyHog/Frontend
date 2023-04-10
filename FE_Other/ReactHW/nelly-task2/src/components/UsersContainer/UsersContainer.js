import React from 'react'
import User from '../User/User'
import s from './UsersContainer.module.css'

export default function UsersContainer({ users }) {

  return (
    <div className={s.users_container}>
      {users.map(el => <User key={el.id} {...el} />)}
    </div>
  )
}
