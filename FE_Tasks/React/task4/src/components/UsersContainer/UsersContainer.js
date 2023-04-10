import React from 'react'
import User from '../User/User'
import { users } from '../../data/users'
import s from './UsersContainer.module.css'

export default function UsersContainer() {
  return (
    <div className={s.users_container}>
      {
        users
          .filter(el => el.age >= 18 && el.active)
          .map(el => <User key={el.id} {...el} />)
      }
    </div>
  )
}