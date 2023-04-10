import React from 'react'
import s from './User.module.css'

export default function User({ avatar, name, email, role }) {

  return (
    <div className={s.user}>
      <img src={avatar} alt='' />
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  )
}
