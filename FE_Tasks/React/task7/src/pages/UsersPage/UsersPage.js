import React from 'react'
import { Link } from 'react-router-dom'
import AdminCard from '../../components/AdminCard/AdminCard'
import UserCard from '../../components/UserCard/UserCard'
import s from './UsersPage.module.css'


export default function UsersPage() {

  return (
    <div className={s.container}>
      <Link to='/users/admin'><AdminCard /></Link>
      <Link to='/users/customer'><UserCard /></Link>
    </div>
  )
}
