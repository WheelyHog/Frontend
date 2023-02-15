// В div с классом cards_container создать карточку с тремя параграфами - First name: Alex, Last name: Ivanov, Age: 47

// let container = document.querySelector(".cards_container");
// let card = document.createElement("div");

// let p1 = document.createElement("p");
// let p2 = document.createElement("p");
// let p3 = document.createElement("p");

// p1.innerText = "First name: Alex";
// p2.innerText = "Last name: Ivanov";
// p3.innerText = "Age: 47";

// container.append(card);
// card.append(p1, p2, p3);

// Добавить элементу card класс card. По этому классу в стилях добавить свойства: width, border, border-radius, padding, margin, background-color


// for (i = 1; i <= 3; i++) {
//   let container = document.querySelector(".cards_container");
//   let card = document.createElement("div");
//   card.classList.add("card");
//   let p1 = document.createElement("p");
//   let p2 = document.createElement("p");
//   let p3 = document.createElement("p");

//   p1.innerText = "First name: Alex";
//   p2.innerText = "Last name: Ivanov";
//   p3.innerText = "Age: 47";

//   container.append(card);
//   card.append(p1, p2, p3);

//   card.style.width = "200px";
//   card.style.border = "1px solid black";
//   card.style.borderRadius = "5px";
//   card.style.padding = "30px";
//   card.style.margin = "10px";
//   card.style.backgroundColor = "cyan";

//   // Параграфу ageElem задать размер шрифта 24px (сделать это через JS)
//   p3.style.fontSize = "24px";

// }

// for (let i = 25; i <= 39; i++) {
//   console.log(i);
// }


for (let i = 60; i >= 45; i--) {
  if (i % 2 === 0){
console.log(i);
  } 
  }