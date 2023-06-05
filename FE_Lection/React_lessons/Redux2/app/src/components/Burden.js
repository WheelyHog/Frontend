import React, { useMemo } from 'react'

export default function Burden({ counter2 }) {

  console.log('Burden was rerendered');

  const burdenHandler = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {
      let a = '123';
    }
    return (counter2 % 2 === 0) ? 'Odd' : 'Even'
  }, [counter2])

  return (
    <div>
      <p>
        {burdenHandler}
      </p>
    </div>
  )
}
