const newUser = {
    "firstName": "Sergii",
    "lastName": "Gutsuliak",
    "phoneNumber": "123456789",
    "email": "mail@gmail.com",
    "password": "123",
    "birthDate": "1996-02-16T00:00:00.000Z",
    // "2023-05-22T18:30:39.954Z"
}




const add_new_user_req = (user) => {

    fetch('http://localhost:8080/api/v1/client/registration', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-Type': 'application/json' },
//   })
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(error => {
            // Обработка ошибки
            console.error(error);
        });
}

add_new_user_req(newUser);
console.log(newUser)