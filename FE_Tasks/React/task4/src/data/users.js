export const users = [
  {
    id: 1,
    firstname: 'Olga',
    lastname: 'Orlova',
    age: 45,
    active: true
  },
  {
    id: 2,
    firstname: 'Ivan',
    lastname: 'Petrov',
    age: 15,
    active: true
  },
  {
    id: 3,
    firstname: 'Irina',
    lastname: 'Ivanova',
    age: 21,
    active: false
  },
  {
    id: 4,
    firstname: 'Anna',
    lastname: 'Mishina',
    age: 34,
    active: true
  },
  {
    id: 5,
    firstname: 'Oleg',
    lastname: 'Ushanov',
    age: 32,
    active: false
  }
]

// 1. Создать два компонента - User и UsersContainer
// 2. Добавить UsersContainer в App
// 3. Для каждого пользователя создать карточку(User) в UsersContainer - имя + фамилия, возраст, статус.Статус - 'online'(true) или 'offline'(false)
// 4. Стилизовать карточки пользователей(border, border - radius, padding).Из контейнера пользователей мделать грид - 4 колонки.
// 5. Если пользователь онлайн покрасить карточку в светло - зеленый цвет.А если оффлайн - то в светло - серый
// 6. Выводить на экран карточки только тех пользователей, которые онлайн и старше 18 лет

// Добавить кнопку, при клике на котрую карточки сортируются по имени в алфавитном порядке

