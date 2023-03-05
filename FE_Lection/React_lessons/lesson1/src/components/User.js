import React from 'react'

function User({ firstname, lastname, age, active }) {

  const status = active ? 'active' : 'not active'

  return (
    <div>
      <p>Name: {firstname} {lastname}</p>
      <p>age: {age}</p>
      <p>status: {status}</p>
    </div>
  )
}

export default User
