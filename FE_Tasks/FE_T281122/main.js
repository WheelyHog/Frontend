const user_form = document.querySelector(".user-form");
const click_btn = document.querySelector(".click_btn");

user_form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target.firstName.value);
  // console.log(event.target.lastName);
})

const {firstName, lastName} = event.target;


click_btn.addEventListener("click", (event) => {
  console.log(event.target);
})

const userCard = document.createElement("div");
// let firstNameElem = document.createElement("p");
// let lastNameElem = document.createElement("p");

userCard.append(firstNameElem, lastNameElem);
document.body.append(userCard);



user_form.addEventListener("submit", (event) => {
  firstNameElem.innerText = user_form.firstName.value;
  lastNameElem.innerText = user_form.lastName.value;
})

// const user = {
//   firstName: "Nelli",
//   lastName: "Efremyan",
//   age: 27,
// }


// const {firstName, lastName, age} = user;

// console.log(user.lastName);