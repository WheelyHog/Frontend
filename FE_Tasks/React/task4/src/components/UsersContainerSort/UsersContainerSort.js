import React, { useState } from 'react'
import User from '../User/User'
import { users } from '../../data/users'
import s from './UsersContainerSort.module.css'

export default function UsersContainerSort() {

  const [usersList, setUsersList] = useState(users)

  const sort = () => {
    let newArray = usersList.slice().sort((a, b) => a.age - b.age)
    setUsersList(newArray)
  }

  const sortByName = () => {
    setUsersList(usersList.slice().sort((a, b) => a.firstname.localeCompare(b.firstname)))
  }

  return (
    <div>
      <div className={s.users_container}>
        {
          usersList.map(el => <User key={el.id} {...el} />)
        }
      </div>
      <button onClick={sort}>Sort by age</button>
      <button onClick={sortByName}>Sort By Name</button>
    </div>
  )
}