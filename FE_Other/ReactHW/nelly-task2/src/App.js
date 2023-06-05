import { useEffect, useState } from "react";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import { getUsers, add_User } from "./requests/users_req";

function App() {

  const [users, setUsers] = useState([])
  useEffect(() => getUsers(setUsers), [])

  const addUser = (e) => {
    e.preventDefault();
    const { email, name, password, avatar } = e.target

    const newUser = {
      email: email.value,
      name: name.value,
      password: password.value,
      avatar: avatar.value,
      role: 'customer',
    }
    // add_User(newUser, setUsers([...users, newUser]))
    add_User(newUser, (newUser) => setUsers([...users, newUser]))
  }

  return (
    <>
      <AddUserForm addUser={addUser} />
      <UsersContainer users={users} />
    </>
  );
}

export default App;
