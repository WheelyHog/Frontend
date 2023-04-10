import React, { useEffect, useState } from 'react'

function App2() {

  let [users, setUsers] = useState([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])


  return (
    <div>
      {users.map(elem => <div key={elem.id}>{elem.name}</div>)}
    </div>
  )
}

export default App2
