import React from 'react'
import s from './User.module.css'

export default function User({ name, email, role }) {
  const styles = role === 'admin' ? 'blue' : 'pink'
  return (
    <div className={s.container} style={{ background: styles }}>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{role}</p>
    </div >
  )
}
