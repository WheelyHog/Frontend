import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavMenu.module.css'

export default function NavMenu() {
  return (
    <div className={s.menu}>
      <NavLink to='/' className={s.menu_item}>Main</NavLink>
      <NavLink to='/products' className={s.menu_item}>Products</NavLink>
      <NavLink to='/users' className={s.menu_item}>Users</NavLink>
    </div>
  )
}
