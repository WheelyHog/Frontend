import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FormElem from '../FormElem/FormElem';
import s from './Modal.module.css'


export default function Modal(props) {

  const { active, setActive } = props;

  return (
    <div className={`${s.modal} ${active && s.active}`} onClick={() => setActive(false)} >
      <div className={`${s.modal_content} ${active && s.active}`} onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} className={s.close} />
        <Routes>
          <Route path='/reg' element={<FormElem
            title={'Registration'}
            link={'/login'}
            input={{ email: 'Email', password: 'Password', secondPassword: 'Enter password again' }}
            button={{ redirect: 'LogIn', submit: 'Register' }}
            infoText={'Регистрируясь на сайте, вы соглашаетесь с нашими правилами и политикой конфиденциальности и соглашаетeс на информационную рассылку'}
            type={'reg'}
          />} />
          <Route path='/login' element={<FormElem
            title={'Authorization'}
            link={'/reg'}
            input={{ email: 'Email', password: 'Password' }}
            button={{ redirect: 'Register', submit: 'Log In' }}
            infoText={'Введите логин и пароль вашего аккаунта'}
            type={'login'}
          />} />

          <Route path='/reset' element={<FormElem
            title={'Reset Password'}
            link={'/login'}
            input={{ email: 'Email' }}
            button={{ redirect: 'Log In', submit: 'Submit reset' }}
            infoText={'Link with new password will send on yor email'}
            type={'reset'}
          />} />
        </Routes>

      </div>
    </div >
  )
}
