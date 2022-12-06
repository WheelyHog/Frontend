const items = ["stone", "scissors", "paper"];

const divUsers = document.querySelector(".users");
const startBtn = document.querySelector(".start-btn");
const gameItems = document.querySelector(".game-items");
const divPlayerChoice = document.querySelector(".player-choice");
const itemImage = document.querySelectorAll(".item-image");
const divBattle = document.querySelector(".battle");
let playerItem = document.createElement("img");
let compItem = document.createElement("img");
const compScore = document.querySelector(".comp-score");
const playerScore = document.querySelector(".player-score");
const divMessage  = document.querySelector(".message");
let title = document.createElement("h4");


let userMove = 0;
let compMove = 0;
let message = "";

startBtn.onclick = (event) => {
  event.target.style.display = "none";
  gameItems.style.display = "none";
  divPlayerChoice.style.display = "block";
}

for (const item of itemImage) {
  item.onclick = () => {
    console.log(item.classList[1]);
    divPlayerChoice.style.display = "none";

    if (item.classList[1] == "stone") {
      userMove = 0;
    } else if (item.classList[1] == "scissors") {
      userMove = 1;
    } else userMove = 2;
    // console.log("userMove= " + userMove);
    playerItem.setAttribute("src", `images/${item.classList[1]}-p.png`);
    playerItem.className = "player-item";

    let compMove = Math.floor(Math.random() * 3);
    compItem.setAttribute("src", `images/${items[compMove]}-c.png`);
    compItem.className = "comp-item";

    console.log("compMove = " + compMove + " userMove = " + userMove);

    if (compMove == 0 && userMove == 1) {
      playerScore.innerHTML = +playerScore.innerHTML + 1;
      message = "Player WIN!!!"
    } else if (compMove == 0 && userMove == 2) {
      playerScore.innerHTML = +playerScore.innerHTML + 1;
      message = "Player WIN!!!"
    } else if (compMove == 1 && userMove == 0) {
      compScore.innerHTML = +compScore.innerHTML + 1;
      message = "Computer WIN!!!"
    } else if (compMove == 1 && userMove == 2) {
      compScore.innerHTML = +compScore.innerHTML +1;
      message = "Computer WIN!!!"
    } else if (compMove == 2 && userMove == 0) {
      compScore.innerHTML = +compScore.innerHTML + 1;
      message = "Computer WIN!!!"
    } else if (compMove == 2 && userMove == 1) {
      playerScore.innerHTML = +playerScore.innerHTML + 1;
      message = "Player WIN!!!"
    } else message = "Both WIN!!!"
    title.innerText = message;
    title.style.textAlign = "center";

  }
}


     

divBattle.append(compItem, playerItem, title);