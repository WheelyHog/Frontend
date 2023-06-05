import React from 'react'
import BlockList from './BlockList'
import { Context } from '../context/Context'
import { useContext } from 'react'

function Main() {

  const string = useContext(Context)


  return (
    <div>
      Main
      <p>{string}</p>
      <BlockList />
    </div>
  )
}

export default Main
