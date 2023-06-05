import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/UI/Button/Button';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {

  const [active, setActive] = useState(false)
  useEffect(() => {
    window.addEventListener('popstate', () => setActive(false))
  })

  return (
    <div>
      <Link to={'/reg'}>
        <Button title='Registration / Authorization' color='yellow' onClick={() => setActive(true)} />
      </Link>
      <Modal active={active} setActive={setActive} />
    </div>
  );
}

export default App;
