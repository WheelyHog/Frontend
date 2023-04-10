import { useEffect, useState } from "react";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import { getUsers } from "./requests/users_req";

function App() {

  const [users, setUsers] = useState([])
  useEffect(() => getUsers(setUsers), [])

  const addUser = (e) => {
    e.preventDefault();
    const { email, name, password, avatar } = e.target

    const newUser = {
      id: Date.now(),
      email: email.value,
      name: name.value,
      password: password.value,
      avatar: avatar.value,
      role: 'customer',
      creationAt: Date(),
      updatedAt: Date()
    }
    users.push(newUser)
    setUsers(users)
  }

  return (
    <>
      <AddUserForm addUser={addUser} />
      <UsersContainer users={users} />
    </>
  );
}

export default App;
