// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let data = [1,2,3]
//         console.log(data);
//         // resolve(data)
//         reject('Failed to fetch')
//     }, 2000)
// })

// promise.then(data => console.log(data))
// promise.catch(er => console.log(er))

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))



async function fetchUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
}

// fetchUsers()


// GET
// let url = 'http://51.250.8.198:8000/api/get_all/'
// fetch(url)
//       .then(res => res.json())
//       .then(data => console.log(data))


    // POST 
let url = 'http://51.250.8.198:8000/api/create/'

let data = {
      title: 'telran',
      text: 'Урок 37-38'
}

fetch(url, {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json;charset=utf-8' 
      },
      body: JSON.stringify(data)
})