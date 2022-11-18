// let newP = document.createElement("p");
// newP.innerText = "some text";

// let div = document.createElement("div");
// div.appendChild(newP);


// 1) Вот документ с таблицей и формой.
//     Как найти?…

//     1.	Таблицу с id="age-table".
//     2.	Все элементы label внутри этой таблицы (их три).
//     3.	Первый td (со словом «Age»).
//     4.	Форму с class="search".
//     5.	Первый input в этой форме.
//     6.	Последний input в этой форме.

// console.log(document.getElementById("age-table"));

// console.log(document.querySelectorAll("age-table label"));
// console.log(document.querySelector("td"));

// console.log(document.getElementsByClassName("search"));
// console.log(document.querySelector("input"));
// let inputArray = document.querySelectorAll("input");
// console.log(inputArray[inputArray.length-1]);


// Создайте div.
//     Внутри заголовок с вашим ФИ. (h3)
//     А так же добавьте чистосердечный совет в виде параграфа.


// let body = document.querySelector("body");
// let div = document.createElement("div");
// let title = document.createElement("h3");
// title.innerText = "Wheelyhog";
// let p = document.createElement("p");
// p.innerText = "Don't Worry, Be Happy! :)";

// div.append(title, p);
// body.appendChild(div);


// Напишите интерфейс для создания списка.
//     Для пункта:
//     1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
//     2. Создавайте элемент <li> и добавляйте его к <ul>.
//     Сделайте с помощью цикла 5 пунктов.


// let ul = document.createElement("ul");
// for (let i = 0; i < 5; i++){
//   let li = document.createElement("li");
//   li.innerText = prompt("Enter todo-list item:", "");
//   ul.appendChild(li); 
// }
// document.body.appendChild(ul);



// 4) Дан массив из объектов, в котором хранятся породы собак и их возраст:
    let dogs = [
        {
          breed: "golden retriever",
          age: 7,
        },
        {
          breed: "labrador retriever",
          age: 4,
        },
        {
          breed: "french bulldog",
          age: 12,
        },
        {
          breed: "beagle",
          age: 6,
        },
        {
          breed: "german shepherd dog",
          age: 2,
        },
        {
          breed: "poodle",
          age: 3,
        },
        {
          breed: "bulldog",
          age: 4,
        },
    ];

// Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.

for (let i =0; i < dogs.length; i++){
  let p = document.createElement("p");
  p.innerText = `${dogs[i].breed}'s age is ${dogs[i].age}`;
  document.body.append(p);
}