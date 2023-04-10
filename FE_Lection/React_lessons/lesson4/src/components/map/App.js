
import './App.css';
import Block from '../map/Block';

function App() {

  let data = [
    { id: 1, title: 'Тайтл 1', text: 'Текст 1' },
    { id: 2, title: 'Тайтл 2', text: 'Текст 2' },
    { id: 3, title: 'Тайтл 3', text: 'Текст 3' },
    { id: 4, title: 'Тайтл 4', text: 'Текст 4' },
  ]


  return (
    <div className='App-header'>
      {data.map(({ id, title, text }, index) => <Block
        title={title}
        key={index}
        text={text}
        id={id} />)}
    </div >
  );
}

export default App;
