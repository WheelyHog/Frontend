import React from 'react'
import AddPlayerForm from '../../components/AddPlayerForm/AddPlayerForm'
import AddTeamForm from '../../components/AddTeamForm copy/AddTeamForm'
import s from './ConfigurationPage.module.css'

export default function ConfigurationPage({ addTeam, addPlayer }) {
  return (
    <div>
      <AddTeamForm addTeam={addTeam} />
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  )
}
