import React, {useState} from 'react'
import UserInfo from './UserInfo'

function App() {

    const data = [
        {id: 1, name: 'Alex', salary: 1500},
        {id: 2, name: 'Steven', salary: 2000},
        {id: 3, name: 'Neena', salary: 1000},
        {id: 4, name: 'John', salary: 4500},
        {id: 5, name: 'King', salary: 400}
    ]

    let [users, setUsers] = useState(data)

    const addEmplHandler = () => {
        let newUser = {id: Date.now(), name: prompt('Enter name'), salary: prompt()}
        setUsers([newUser, ...users])
    }

    const delEmplHandler = () => {
        let newArr = users.slice()
        newArr.pop()
        setUsers([...newArr])
    }

    const addSalaryEmplHandle = () => {
        let newUser = [...users]
        newUser.forEach((el) => (el.salary = Math.round(el.salary * 1.1)))
        setUsers([...newUser])
    }

    const deleteUserById = (id) => {
        let newUser = users.filter(elem => elem.id != id)
        setUsers(newUser)
    }

    // const deleteFunction = () => {
    //     let idUser = prompt('Enter id');
    //     (users.map(elem => elem.id).includes(+idUser)) ? deleteUserById(+idUser) : alert('User is not defined')
    //
    //     }

    const deleteFunction =() => {
        let idUser = prompt('Enter id');
        const foundUser  = users.find(elem => elem.id == idUser)

        if(foundUser){
            deleteUserById(idUser)
        } else {
            alert('User is not defined')
        }
    }


    return (
        <div>
            <div>
                <button onClick={addEmplHandler}>Add User</button>
                <button onClick={delEmplHandler}>Delete Last User</button>
                <button onClick={addSalaryEmplHandle}>Add 10% to salary</button>
                {/*<button onClick={() => deleteUserById(3)}>Delete User</button>*/}
                <button onClick={deleteFunction}>Delete by ID</button>
            </div>
            <div>
                {users.map(elem => <UserInfo name={elem.name} salary={elem.salary} key={elem.id}
                                             deleteUserById={deleteUserById} id={elem.id}/>)}
            </div>
        </div>
    )
}

export default App
