import React, { useEffect, useState } from "react";



function App() {

  let [count1, setCount1] = useState(0)
  let [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log('Первый режим работы', 'Монтирование + Обновление')
  })

  useEffect(() => {
    console.log('Второй режим работы', 'Монтирование')
  }, [])

  // useEffect(() => {
  //   console.log('Третий режим работы', 'Монтирование + Обновление count1')
  // }, [count1])

  useEffect(() => {
    setCount1(++count1)
  }, [count2])

  return (
    <div>
      <div>
        <h1>{count1}</h1>
        <div>
          <button onClick={() => setCount1(++count1)}>Click1</button>
        </div>
      </div>
      <div>
        <h1>{count2}</h1>
        <div>
          <button onClick={() => setCount2(++count2)}>Click2</button>
        </div>
      </div>
    </div>
  );
}

export default App;
