import React from 'react'
import s from './UserCard.module.css'

export default function UserCard() {
  return (
    <div className={s.user}>
      <img src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' />
      <h2>Users</h2>
    </div>
  )
}
