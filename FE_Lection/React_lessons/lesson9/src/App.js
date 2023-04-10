import Main from "./components/Main";
import './App.css'
import { useState } from 'react'
import { Context } from './context/Context'


function App() {

  let [string, setString] = useState('state')

  return (
    <div>
      <Context.Provider value={string}>
        App
        <p>{string}</p>
        <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
