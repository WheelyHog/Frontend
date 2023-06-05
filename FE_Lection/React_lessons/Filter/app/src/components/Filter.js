import React from 'react'

export default function Filter() {
  return (
    <div>
      <label>
        Товары со скидкой
        <input type='checkbox' onClick={(e) => console.log(e.target.checked)} />
      </label>
    </div>
  )
}
