import styles from './App.module.css'
import FormContainer from './Components/FormContainer/FormContainer';
import DaysContainer from './Components/DaysContainer/DaysContainer';
import { useState } from 'react';

function App() {

  let [days, setDays] = useState([])
  let [tasks, setTasks] = useState([])

  //Создали компонент формы, который собирает введенную пользователем информацию и формирует из этих данных объект

  const submit_form = event => {
    event.preventDefault()
    let { weekday, importance, description } = event.target
    const newTask = {
      id: Date.now(),
      id: Date.now(),
      weekday: weekday.value,
      importance: importance.value,
      description: description.value
    }
    setTasks([newTask, ...tasks])
    //Если  days не включает внесенное в форму день недели, то вносим его в массив
    if (!days.includes(weekday.value)) {
      setDays([...days, weekday.value])
    }

    //Обнуляем поля после отправки формы
    weekday.value = ''
    importance.value = ''
    description.value = ''
  }

  const deleteDay = (weekday) => {
    setDays(days.filter(elem => elem !== weekday))
  }

  //Функция, которая меняет состояние компонента DaysContainer
  // const add_day = addTodo = setDays([...days, addTodo])

  return (
    <div className={styles.app}>
      <FormContainer submit_form={submit_form} />
      <DaysContainer
        days={days}
        deleteDay={deleteDay}
        tasks={tasks} />
    </div>
  );
}

export default App;
