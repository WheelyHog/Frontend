
// import Block from '../Block/Block';
// import Content from '../Content/Content';
// import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <Block title={'test'} post={10} color={"red"} size={"l"} isRead={false} />
//       <Block title={'no-test'} post={"hkjSKJHhkhkh"} color={"blue"} size={"m"} isRead={true} />
//       <Block title={[1, 2, 3]} post={"hello"} color={"green"} size={"xl"} isRead={false} />
//       <Content />
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Content from '../Content/Content'

function App() {
  return (
    <div>
      <Content color={'green'} discount_price={1000} price={1500} />
      <Content color={'blue'} discount_price={2000} price={2200} />
      <Content color={'yellow'} discount_price={400} price={900} />
    </div>
  )
}


export default App
