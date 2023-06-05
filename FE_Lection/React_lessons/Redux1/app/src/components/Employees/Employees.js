import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewEmplAction, addToAgeAction, delByDblClickAction, delFirstEmplAction, delLastEmplAction, nullAgeAction } from '../../store/emplReducer'

export default function Employees() {

  let empl = useSelector(store => store.empl)

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Employees</h2>
      <button onClick={() => dispatch(delFirstEmplAction())}>Del First</button>
      <button onClick={() => dispatch(delLastEmplAction())}>Del Last</button>
      <button onClick={() => dispatch(addNewEmplAction(prompt()))}>Add New Empl</button>
      <button onClick={() => dispatch(addToAgeAction(+prompt()))}>Change Age</button>
      <button onClick={() => dispatch(nullAgeAction())}>Null Age</button>
      <div>
        {empl.map(elem => <div key={elem.id} onDoubleClick={() => dispatch(delByDblClickAction(elem.id))}>
          <p>{elem.name} {elem.age}</p>
        </div>)}
      </div>
    </div>
  )
}
