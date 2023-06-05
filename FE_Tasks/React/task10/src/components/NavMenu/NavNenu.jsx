import React from 'react'
import { Link } from 'react-router-dom'
import s from './NavMenu.module.css'

export default function NavNenu() {
  return (
    <div className={s.container}>
      <Link to='/'><button>Configurations</button></Link>
      <Link to='/teams'><button>Teams</button></Link>
    </div>
  )
}
