import React, { useContext } from 'react'
import { Context } from '../../context'
import s from './AddTeamForm.module.css'

export default function AddTeamForm() {
  const { addTeam } = useContext(Context)
  return (
    <div className={s.container}>
      <form onSubmit={addTeam}>
        <p>Add Team</p>
        <input type='text' name='team' placeholder='Enter Team Name' />
        <button type='submit'>Add</button>
      </form>
    </div>

  )
}
