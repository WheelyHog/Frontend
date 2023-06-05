import { useState } from 'react';
import './App.css';
import Burden from './components/Burden';
import Counter from './components/Counter';
import Map from './components/Map/Map';


function App() {


  let [counter1, setCounter1] = useState(0)
  let [counter2, setCounter2] = useState(0)

  return (
    <div>
      <div className='counter'>
        <Counter value={counter1} elem={'count1'} />
        <button onClick={() => setCounter1(++counter1)}>+</button>
      </div>
      <div className='counter'>
        <Counter value={counter2} elem={'count2'} />
        <button onClick={() => setCounter2(++counter2)}>+</button>
      </div>
      <Burden counter2={counter2} />
      <Map />
    </div>
  );
}

export default App;
