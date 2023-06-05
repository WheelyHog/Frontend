import React from 'react'
import s from './Header.module.css'
import logo from '../../images/logo.svg'

function Header() {
  return (
    <div className={s.header}>
      <img src={logo} alt={logo} />
      <div className={s.menu}>
        <ul>
          <li>О нас</li>
          <li>Услуги</li>
          <li>Аренда</li>
        </ul>
      </div>
      <button className={s.btn}>Связаться</button>
    </div>
  )
}

export default Header