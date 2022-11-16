
// const root = document.createElement("div");
// root.setAttribute("id", "root");
// const body = document.querySelector("body");

// body.appendChild(root);
// root.innerText = "This is my root div";

// for (let i = 0; i <= 19; i++){
//   let p = document.createElement("p");
//   p.innerText = `${i}`;
//   body.appendChild(p);
// }


// const body = document.querySelector("body");
// const div = document.createElement("div");
// div.setAttribute("id", "test");
// for (let i = 0; i <= 20; i++) {
//   let p = document.createElement("p");
//   p.innerText = `${i} this is new p`;
//   div.appendChild(p);
// }
// body.appendChild(div);


// const strings = [
//   "createElement - создаёт элемент c тем тегом, что указан в аргументе",
//   "appendChild - обавляет узел в конец списка дочерних элементов указанного родительского узла.",
//   "Циклы - for(for in , for of), while, do while",
//   "Функции являются основными «строительными блоками» программы.",
// ];
// const body = document.querySelector("body");
// let rootDiv = document.createElement("div");
// rootDiv.setAttribute("id", "root");
// body.appendChild(rootDiv);
// for (i = 0; i < strings.length; i++){
//   const p = document.createElement("p");
//   p.innerText = strings[i];
//   rootDiv.appendChild(p);
// }

// const body = document.querySelector("body");
// let userImg = prompt("add image link:");
// let userPost = prompt("Add your post link:");

// const image = document.createElement("img");
// image.setAttribute("src", userImg);

// const post = document.createElement("a");
// const newPost = document.createElement("a");
// newPost.setAttribute("href", userPost);
// newPost.setAttribute("target", "_blank");
// newPost.appendChild(image);

// post.innerText = "My Post";
// post.setAttribute("href", userPost);
// post.setAttribute("target", "_blank");

// body.append(newPost, post);


// `Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #root.

let links = [
  {
    title: "Google",
    link: "https://www.google.com/",
  },
  {
    title: "Baidu",
    link: "http://www.baidu.com/",
  },
  {
    title: "Bing",
    link: "https://www.bing.com/",
  },
  {
    title: "Yahoo!",
    link: "https://www.yahoo.com/",
  },
  {
    title: "Yandex(dzen)",
    link: "https://www.dzen.ru/",
  },
];


const body = document.querySelector("body");
let rootDiv = document.createElement("div");
rootDiv.setAttribute("id", "root");
body.appendChild(rootDiv);

for (i = 0; i < links.length; i++){
  let link = document.createElement("a");
  link.innerText = links[i].title;
  link.setAttribute("href", links[i].link);
  rootDiv.appendChild(link);
}
body.append(rootDiv);
