import React from 'react'
import '../../App.css'

export default function Header(props) {
  const { scrollToBlock1, scrollToBlock2 } = props
  return (
    <div className='header'>
      <div className='logo'></div>
      <div className='menu_wrapper'>
        <p onClick={scrollToBlock1} >Block1</p>
        <p onClick={scrollToBlock2} >Block2</p>

      </div>
    </div>
  )
}
