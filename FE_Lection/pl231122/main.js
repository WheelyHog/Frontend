
// let p = document.createElement("p");
// p.innerText = "Style with JS";
// p.style.color = "red";
// p.style.cssText = "color: blue; font-weight: bold; font-size: 24px";

// document.body.append(p);

// const div = document.createElement("div");
// document.body.append(div);

// div.style.border = "1px solid black";
// div.style.width = "100px";
// div.style.height = "100px";

// div.onmouseover = () => div.style.backgroundColor = "green";
// div.onmouseout = () => div.style.backgroundColor = "white";

// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.



// for (let i = 0; i <= 255; i += 5) {
//   const div = document.createElement("div");
//   div.style.border = "1px solid black";
//   div.style.width = "20px";
//   div.style.height = "50px";
//   div.style.display = "inline-block";
//   div.style.marginRight = "5px";
//   div.onmouseover = () => {
//     div.style.backgroundColor = `rgb(128,128, ${i})`;
//   }
//   div.onmouseout = () => {
//     div.style.backgroundColor = `white`;
//   }
//   document.body.append(div);
// }

// let div = document.createElement("div");
// div.setAttribute("class", "newClass");
// document.body.append(div);
// console.log(div.classList);


// for (let i =0; i < 10; i++){
//   let div = document.createElement("div");
//   div.innerText = i;

//   div.style.border = "1px solid black";
//   div.style.width
//   document.body.append(div);

//   // div.onclick = () => {
//   //   if (div.classList[0] == "active"){
//   //     div.classList.remove("active");
//   //   } else div.classList.add("active");
//   // }

//   // div.onclick = () => {
//   //   if (div.classList.contains("active")) {
//   //     div.classList.remove("active");
//   //   } else div.classList.add("active");
//   // }

//   div.onclick = () => {
//     div.classList.toggle("active");
//   }

// }

// const cards = [
//   {
//     en: "door",
//     ru: "дверь",
//   },
//   {
//     en: "sofa",
//     ru: "диван",
//   },
//   {
//     en: "chair",
//     ru: "стул",
//   },
//   {
//     en: "stove",
//     ru: "плита",
//   },
//   {
//     en: "bag",
//     ru: "сумка",
//   },
// ];


// for (let i =0; i < cards.length; i++){
//   let div = document.createElement("div");
//   let en = document.createElement("p");
//   en.innerText = cards[i].en;
//   en.classList.add("show");
//   let ru = document.createElement("p");
//   ru.innerText = cards[i].ru;
//   ru.classList.add("hide");
//   div.onclick = () => {
//     if (ru.classList.contains("show")){
//       ru.classList.replace("show", "hide");
//       en.classList.replace("hide", "show");
//     } else {
      
//         en.classList.replace("show", "hide");
//         ru.classList.replace("hide", "show");
//     }
//   }
//   document.body.append(div);

//   div.append(en,ru);

// }
//   let button = document.querySelector("button");
// console.log(button.classList.length);

// FE TASKS =====================================

// let btn = document.querySelector(".click");
// btn.addEventListener("click", () => console.log("hello"));

let btn_show = document.querySelector(".show_text_btn");
let input_show = document.querySelector(".show_text");
btn_show.onclick = () => {
  input_show.value = "!!!";
}


let show_pas = document.querySelector(".show_pas");
let show_text = document.querySelector(".pass");
show_pas.onclick = () => {
  show_text.type = show_text.type === "password" ? "text" : "password";
}
