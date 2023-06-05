import React, { forwardRef } from 'react'
import s from './Input.module.css'


const Input = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} {...props} className={s.input_elem} />
    </div>
  )
})

export default Input