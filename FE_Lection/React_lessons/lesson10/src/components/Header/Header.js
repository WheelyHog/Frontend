import React from 'react'
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.header_wrapper}>
      <div className={s.logo}></div>
      <div className={s.menu_wrapper}>
        <a href='/'>Home</a>
        <a href='/goods'>Goods</a>
        <a href='/about'>About</a>
        <a href='/contacts'>Contacts</a>
      </div>
    </div>
  )
}

export default Header
