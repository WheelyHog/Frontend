import React from 'react'
import styles from './FormContainer.module.css'

function FormContainer({submit_form}) {

    return (

    <div className={styles.form_container}>

        <form onSubmit={submit_form}> 

            <div className={styles.choise_section}>
                <div className={styles.select_section}>
                    <div>
                        <select name='weekday' required> 
                            <option value='' >Выберите день недели</option> 
                            <option value='0'>ПН</option>
                            <option value='1'>ВТ</option>
                            <option value='2'>СР</option>
                            <option value='3'>ЧТ</option>
                            <option value='4'>ПТ</option>
                            <option value='5'>СБ</option>
                            <option value='6'>ВС</option>
                        </select>
                    </div>
                    <div>
                        <select name='importance' required>
                            <option value=''>Выберите важность</option>
                            <option value='1'>Важно</option>
                            <option value='0'>Неважно</option>
                        </select>
                    </div>

                </div>
                <input type='text' name='description' placeholder='Описание' required/>
            </div>
            <button type='submit'>Добавить</button>
        </form>
    </div>
    )
    }
    
export default FormContainer