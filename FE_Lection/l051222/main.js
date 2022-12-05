// const startBtn = document.querySelector("#start");

// function start() {
//   let compMove = Math.floor(Math.random() * 3);
//   console.log(compMove);

//   let userMove = parseInt(prompt("0, 1 or 2?"));

//   if (isNaN(userMove) || userMove > 2 || userMove < 0) {
//     alert("You enter wrong number");
//     return;
//   } if (compMove == 0 && userMove == 1) {
//     alert("user WIN!");
//   } else if (compMove == 0 && userMove == 2) {
//     alert("comp WIN!");
//   } else if (compMove == 1 && userMove == 0) {
//     alert("comp Win!");
//   } else if (compMove == 1 && userMove == 2) {
//     alert("user WIN!");
//   } else if (compMove == 2 && userMove == 0) {
//     alert("user WIN!");
//   } else if (compMove == 2 && userMove == 1) {
//     alert("comp WIN!");
//   } else alert("Both WIN!");
// }

// startBtn.onclick = () => start();

//-------------------------------------------------------------

const secondHand = document.querySelector("#second-hand");
const minuteHand = document.querySelector("#minute-hand");
const hourHand = document.querySelector("#hour-hand");

function getDate() {
  let now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const minutes = now.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

//  setInterval(getDate, 1000);


let startBtn = document.querySelector(".start");

let setInt;
startBtn.onclick =() => {
  // setInterval(getDate, 1000);
  setInt = setInterval(getDate, 1000);
}
let stopBtn = document.querySelector(".stop");
stopBtn.onclick =() => {
  clearInterval(setInt);
}
