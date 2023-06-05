import React, { forwardRef } from 'react'

const Block2 = forwardRef((props, ref) => {

  return (
    <div ref={ref} className='block' style={{ background: 'blue' }}>
      Block1
    </div>
  )
})

export default Block2
