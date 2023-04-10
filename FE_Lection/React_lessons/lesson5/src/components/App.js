import React, { useState } from 'react'

function App() {

  let [count, setCount] = useState(0)

  const addHandle = () => {
    let answer = +prompt()
    if (!isNaN(answer)) {
      setCount(count + answer)
    }
  }

  const rmHandle = () => {
    let answer = +prompt()
    if (!isNaN(answer)) {
      setCount(count - answer)
    }
  }

  // const handle = (sign) => {
  //   let answer = +prompt()
  //   if (!isNaN(answer)) {
  //     if (sign == '+') {
  //       setCount(count + answer)
  //     } else if (sign == '-') {
  //       setCount(count - answer)
  //     }
  //   }
  // }

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(++count)}>++</button>
        <button onClick={() => setCount(--count)}>--</button>
      </div>
      <div>
        <button onClick={() => setCount(count += 100)}>+100</button>
        <button onClick={() => setCount(count -= 100)}>-100</button>
      </div>
      <div>
        <button onClick={() => setCount(count = 0)}>Set to 0</button>
      </div>
      <div>
        <button onClick={() => setCount(count = count - +prompt('Уменьшить на ...', 0))}>Уменьшить на</button>
        <button onClick={() => setCount(count = count + +prompt('Увеличить на ...', 0))}>Увеличить на</button>
      </div>
      <button onClick={rmHandle}>Уменьшить на</button>
      <button onClick={addHandle}>Увеличить на</button>
    </div >
  )
}

export default App
