// 1. В div с классом container добавить 2 параграфа с произвольным текстом (через DOM)

// let container = document.querySelector(".container");
// let par1 = document.createElement('p');
// let par2 = document.createElement('p');
// par1.innerText = "Hello!";
// par2.innerText = "Give me money!";

// let image =document.createElement('img');
// image.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmD3RfOSlS8s_CGPpS4kC5CDD_GS7aB1OWvA&usqp=CAU');

// container.append(par1, par2, image);


// 2. В div с классом container добавить карточку (div). Внутрь карточки добавить 2 парагафа с произвольным текстом.

let container = document.querySelector('.container');
let greeting = document.querySelector('.greeting');

let par1 = document.createElement('p');
let par2 = document.createElement('p');

par1.innerText = "Hello!";
par2.innerText = "Give me money!";

let card = document.createElement('div');

card.classList.add('card');
greeting.classList.remove('greeting2');



card.setAttribute('border', '1px solid blue');
card.setAttribute('width', '200px');
card.setAttribute('border-radius', '5px');
card.setAttribute('background-color', 'yellow');
card.setAttribute('padding', '25px');
card.setAttribute('margin', '15px');

card.style.borderRadius = '10px';
card.style.border = '1px solid blue';
card.style.width = '200px';

card.append(par1, par2);
container.append(card);

// Элементу с классом card добавить следующие стили: border, width, border-radius, background-color, padding, margin


