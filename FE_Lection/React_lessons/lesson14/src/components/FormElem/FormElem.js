import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import s from './FormElem.module.css'

export default function FormElem(props) {
  const { title, link, button, input, infoText, type } = props

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm()

  const password = useRef()
  password.current = watch('password', '')

  const emailElem = register('email', {
    required: 'Email must be entered',
    pattern: {
      value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
      message: 'Wrong email'
    }
  })

  const passwordElem = register('password', {
    required: 'Password must be entered',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: 'Wrong password'
    }
  })

  const secondPasswordElem = register('secondPassword', {
    required: 'Password must be entered',
    validate: (value) => value === password.current || 'passwords are not equal'
  })

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <h2>{title}</h2>
        <p>{input.password}</p>
        <Input {...passwordElem} />
        <div>{errors.password && <p className={s.warning_text}>{errors.password.message}</p>}</div>

        {(type !== 'reset') &&
          <>
            <p>{input.password}</p>
            <Input {...passwordElem} />
            <div>
              {errors.password && <p className={s.warning_text}>{errors.password.message}</p>}
            </div>
          </>
        }

        {(type === 'reg') &&
          <>
            <p>{input.secondPassword}</p>
            <Input {...secondPasswordElem} />
            <div>{errors.password && <p className={s.warning_text}>{errors.password.message}</p>}</div>
          </>}


        <p>{input.email}</p>
        <Input {...emailElem} />
        <div>{errors.email && <p className={s.warning_text}>{errors.email.message}</p>}</div>
        <p className={s.info_text}>{infoText}</p>
        <Button title={button.submit} color='yellow' />
        <Link to={link}><Button title={button.redirect} /></Link>
      </form>
    </div>
  )
}
