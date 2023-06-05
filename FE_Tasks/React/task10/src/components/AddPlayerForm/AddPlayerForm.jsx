import React, { useContext } from 'react'
import s from './AddPlayerForm.module.css'
import Select from 'react-select'
import { Context } from '../../context'


export default function AddPlayerForm() {

  const { teams, addPlayer } = useContext(Context)

  return (
    <div className={s.container}>
      <form onSubmit={addPlayer}>
        <p>Add Player</p>
        <input type='text' name='name' placeholder='Enter Player Name' />
        <Select options={teams} name='team' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
