import React from 'react'
import s from './Button.module.css'

const Button = (props) => {
  const { title, color, ...otherProps } = props
  return (
    <button className={`${s.button_elem} ${s[color]}`} {...otherProps}>{title}</button>
  )
}

export default Button
