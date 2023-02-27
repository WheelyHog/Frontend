import User from "./components/User"
import Profession from "./components/Profession"


function App() {

  const users = [
    {
      id: 1,
      firstname: 'Oleg',
      lastname: 'Petrov',
      age: 28
    },
    {
      id: 2,
      firstname: 'Anna',
      lastname: 'Orlova',
      age: 54
    },
    {
      id: 3,
      firstname: 'Irina',
      lastname: 'Ivanova',
      age: 76
    },
    {
      id: 4,
      firstname: 'Ivan',
      lastname: 'Sokolov',
      age: 21
    }
  ]

  const professions = ['doctor', 'programmer', 'engineer']

  return (
    <div>
      <div>
        {
          users.map(el => <User {...el} key={el.id} />)
        }
      </div>

      <div>
        {
          professions.map((el, index) => <Profession title={el} key={index} />)
        }
      </div>
    </div>
  );
}

export default App