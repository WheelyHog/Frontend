import React from 'react'
import Content from './components/Content/Content'
import { offer, rental } from './data/data'

function App() {
  return (
    <div className='App'>
      <Content image={offer.image} title={offer.title} text={offer.text} background={offer.background} />
      <Content image={rental.image} title={rental.title} text={rental.text} dir={rental.dir} background={rental.background} />
    </div>
  )
}

export default App
