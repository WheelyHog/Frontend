
import Block from '../Block/Block';
import './App.css';

function App() {

  return (
    <div className="App">
      <Block title={'test'} post={10} color={"red"} size={"l"} />
      <Block title={'no-test'} post={"hkjSKJHhkhkh"} color={"blue"} size={"m"} />
      <Block title={[1, 2, 3]} post={"hello"} color={"green"} size={"xl"} />
    </div>
  );
}

export default App;
