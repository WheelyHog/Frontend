import React, { forwardRef } from 'react'

const Block1 = forwardRef((props, ref) => {

  return (
    <div ref={ref} className='block' style={{ background: 'red' }}>
      Block1
    </div>
  )
})

export default Block1