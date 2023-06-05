import React, { useRef } from 'react'
import Header from './components/Header/Header'
import Block1 from './components/Block1/Block1'

import './App.css'
import Block2 from './components/Block2/Block2'

export default function MyApp() {
  let block1Ref = useRef()
  let block2Ref = useRef()

  function scrollToBlock1() {
    block1Ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  function scrollToBlock2() {
    block2Ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Header scrollToBlock1={scrollToBlock1} scrollToBlock2={scrollToBlock2} />
      <Block1 ref={block1Ref} />
      <Block2 ref={block2Ref} />
    </div>
  )
}
