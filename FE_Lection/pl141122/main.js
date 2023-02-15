let head = document.getElementById('heading');
console.log(head);
head.innerText = "I am almost know DOM";

let hello = document.getElementsByClassName('hello');
for (let i = 0; i < hello.length; i++) {
  hello[i].innerText = "WTF???!!!";
}

for (let p of hello) {
  p.innerText = "HI!"
}

for (let index in hello) {
  hello[index].innerText = "Bye!!!"
}

let arr = [];
for (let elem of hello) {
  arr.push(elem.textContent);
}
console.log(arr);

arr.shift();
console.log(arr);
arr.unshift("New1", "New2");
console.log(arr);

let li = document.getElementsByTagName('li');
for (let elem of li) {
  // li[elem].innerText = "7349857tweu";
}

// li[0].innerText = "hdsghjsgh"; 

let obj = {};
for (let i = 0; i < hello.length; i++){
  obj[i] = hello[i].textContent;
}
console.log(obj);
delete obj[4];
console.log(obj);
console.log(obj["3"]);

let items = document.querySelectorAll('li');
for (item in items){
  items[item].innerText = `New ${item}text`; 
}

let special_items = document.querySelectorAll('li.special');
for (let spec_item in special_items){
  special_items[spec_item].innerText = `This is ${spec_item}`;
}

let first_li = document.querySelector('li');
first_li.innerText = "FIRST!!!";

let images = document.querySelectorAll('img');
for (let img of images){
  img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinXbYNP5K67G7BxbBpqoNDZXPT2I1EpcD1g&usqp=CAU");
  img.setAttribute("alt", "dog");
}

