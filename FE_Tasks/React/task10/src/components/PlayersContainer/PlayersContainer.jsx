import React, { useContext } from 'react'
import { Context } from '../../context'
import Player from '../Player/Player'
import s from './PlayersContainer.module.css'

export default function PlayersContainer() {
  const { players } = useContext(Context)
  return (
    <div className={s.players_container}>
      {players.map(elem => <Player {...elem} key={elem.id} />)}
    </div>
  )
}
