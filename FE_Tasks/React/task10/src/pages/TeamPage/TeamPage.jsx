import React from 'react'
import PlayersContainer from '../../components/PlayersContainer/PlayersContainer'
import s from './TeamPage.module.css'

export default function TeamPage() {
  return (
    <div className={s.container}>
      <PlayersContainer />
    </div>
  )
}
