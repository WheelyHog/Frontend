import React from 'react'
import { Context } from '../context/Context'
import { useContext } from 'react'

function BlockItem() {

  const string = useContext(Context)

  return (
    <div>
      BlockItem
      <p>{string}</p>
    </div>
  )
}

export default BlockItem
