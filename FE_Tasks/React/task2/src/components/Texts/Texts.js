import React, { useState } from 'react'

function Texts() {

  // let colored = false

  let [colored, setColored] = useState(false)

  const text_style = {
    color: colored ? 'red' : 'black'
  }

  const changeColor = () => {
    // colored = !colored
    setColored(!colored)
  }


  return (
    <div>
      <p style={text_style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit amet reiciendis distinctio autem ipsum
        consequatur earum quia nobis, quisquam facilis ad est asperiores, provident architecto placeat doloremque officia,
        laborum omnis inventore impedit unde? Pariatur odit soluta quas eum dicta. Delectus hic fugit mollitia porro qui
        cupiditate quis in ratione!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit amet reiciendis distinctio autem ipsum
        consequatur earum quia nobis, quisquam facilis ad est asperiores, provident architecto placeat doloremque officia,
        laborum omnis inventore impedit unde? Pariatur odit soluta quas eum dicta. Delectus hic fugit mollitia porro qui
        cupiditate quis in ratione!</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Texts
