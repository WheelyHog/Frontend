import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPeople } from '../../request_api';
import User from '../User/User';
import s from './UsersContainer.module.css'

export default function UsersContainer() {
  const [users, setUsers] = useState([])
  useEffect(() => getPeople((data) => setUsers(data)), [])
  const { role } = useParams()
  console.log(users);

  return (
    <div className={s.container}>
      {users.filter(elem => elem.role === role).map(elem => <User {...elem} />)}
    </div>
  )
}
