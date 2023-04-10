import s from './User.module.css'

export default function User({ firstname, lastname, age, active }) {

  const status = active ? 'online' : 'offline';

  const card_style = {
    backgroundColor: active ? 'lightgreen' : 'lightgray'
  }

  return (
    <div className={s.user_card} style={card_style} >
      <p>Name: {`${firstname} ${lastname} `}</p>
      <p>Age: {age}</p>
      <p>Status: {status}</p>
    </div >
  )
}
