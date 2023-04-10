import React from 'react'

function UserInfo({name, salary, id, deleteUserById}) {
    return (
        <div onClick={() => deleteUserById(id)}>
            <h2>{name}</h2>
            <p>{salary}</p>
        </div>
    )
}

export default UserInfo
