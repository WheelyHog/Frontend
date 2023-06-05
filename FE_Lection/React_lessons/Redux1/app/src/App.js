import { useSelector } from 'react-redux';
import './App.css';
import Count from './components/Count/Count';
import Employees from './components/Employees/Employees';
import Users from './components/Users/Users';



function App() {

  let users = useSelector(store => store.users)
  let empl = useSelector(store => store.empl)


  return (
    <div>
      <Count />
      <Employees empl={empl} />
      <Users users={users} empl={empl} />
    </div>
  );
}

export default App;
