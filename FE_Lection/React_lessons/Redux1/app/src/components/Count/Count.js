import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrByPayloadAction, incrByPayloadAction } from '../../store/countReducer'

export default function Count() {
  let count = useSelector(store => store.count.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter:</h2>
      <h4>{count}</h4>

      <button onClick={() => dispatch(incrByPayloadAction(1))}>+</button>
      <button onClick={() => dispatch(decrByPayloadAction(1))}>-</button>

      <button onClick={() => dispatch(incrByPayloadAction(+prompt('Enter number', 0)))}>+Number</button>
      <button onClick={() => dispatch(decrByPayloadAction(+prompt('Enter number', 0)))}>-Number</button>

    </div>
  )
}
