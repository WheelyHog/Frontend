import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let ulRef = useRef()
  let numberRef = useRef()



  let [number, setNNumber] = useState([1, 2, 3, 4, 5])

  numberRef.current = number

  const addElement = () => {
    const newElement = number[number.length - 1] + 1
    setNNumber([...number, newElement])
  }

  const handler = useCallback(() => console.log('scroll!', number, numberRef.current), [])

  const stopScroll = () => {
    ulRef.current.removeEventListener('scroll', handler)
  }

  useEffect(() => {
    ulRef.current.addEventListener('scroll', handler)
  })

  return (
    <div>
      <ul ref={ulRef}>
        {number.map((el, index) =>
          <li key={index}>{el}</li>
        )}
      </ul>
      <button onClick={addElement}>Add new element</button>
      <button onClick={stopScroll}>Stop event!</button>
    </div>
  );
}

export default App;
