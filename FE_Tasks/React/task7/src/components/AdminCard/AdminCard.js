import React from 'react'
import s from './AdminCard.module.css'

export default function AdminCard() {
  return (
    <div className={s.user}>
      <img src='https://www.clipartmax.com/png/middle/319-3191274_male-avatar-admin-profile.png' />
      <h2>Admins</h2>
    </div>
  )
}
