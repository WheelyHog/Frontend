import React, { useContext } from 'react'
import { Context } from '../../context'
import s from './Player.module.css'

export default function Player({ id, firstname, team }) {
  const { deletePlayer } = useContext(Context)
  return (
    <div className={s.player} onDoubleClick={() => deletePlayer(id)}>
      <p>Name: {firstname}</p>
      <p>Team: {team}</p>
    </div>
  )
}
