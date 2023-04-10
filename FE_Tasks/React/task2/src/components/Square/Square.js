import React, { useState } from 'react'

function Square() {

  let [squareStyles, setSquareStyles] = useState(false)

  const styles = {
    backgroundColor: squareStyles ? 'blue' : 'green',
    width: setSquareStyles ? '400px' : '200px',
    height: setSquareStyles ? '400px' : '200px',
  }

  const change_styles = () => setSquareStyles(squareStyles = !squareStyles)
  return (
    <div>
      <div style={styles}></div>
      <button onClick={change_styles}>ChangeColor</button>
    </div>
  )

}

export default Square
// 1. Создать компонент square - квадрат зеленого цвета с размерами 300х300 px
// 2. При клике на кнопку меня у квадрата цвет на синий, а размер на 400х400 px