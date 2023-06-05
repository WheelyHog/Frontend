import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavNenu from './components/NavMenu/NavNenu';
import ConfigurationPage from './pages/ConfigurationPage/ConfigurationPage';
import TeamPage from './pages/TeamPage/TeamPage';
import { Context } from './context';


function App() {

  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])

  const addTeam = (e) => {
    e.preventDefault()
    const value = e.target.team.value;
    setTeams([...teams, { value, label: value }]);
    e.target.reset()
  }

  const addPlayer = (e) => {
    e.preventDefault()
    const newPlayer = {
      id: Date.now(),
      firstname: e.target.name.value,
      team: e.target.team.value
    }
    setPlayers([...players, newPlayer])
    e.target.reset()
  }

  const deletePlayer = (id) => {
    const copyPlayers = players.filter(elem => elem.id !== id)
    setPlayers(copyPlayers)
  }

  return (
    <Context.Provider value={{ teams, addTeam, addPlayer, players, deletePlayer }}>
      <div>
        <NavNenu />
        <Routes>
          <Route path='/' element={<ConfigurationPage />} />
          <Route path='/teams' element={<TeamPage />} />
        </Routes>
      </div>
    </Context.Provider >
  );
}

export default App;
