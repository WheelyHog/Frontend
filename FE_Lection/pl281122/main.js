// const btn = document.querySelector("button");
// const name = document.querySelector("#first-name");

// btn.onclick = (event) => {
//   event.preventDefault();
//   alert(name.value);
// }

// const btn = document.querySelector("button");


const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const sectionProd = document.querySelector("#products");


let products = [];
titleInput.setAttribute("required", "true");
priceInput.setAttribute("required", "true");

let form = document.querySelector("#form");
form.onsubmit = (e) => {
  e.preventDefault();

products.push(
  {
  title: titleInput.value, 
  price: priceInput.value,
});

newProducts();
// createNode(titleInput.value, priceInput.value);

titleInput.value = "";
priceInput.value = "";
}

function createNode(title, price){
  let div = document.createElement("div");
  div.classList.add("products");

  let pTitle = document.createElement("p");
  let pPrice = document.createElement("p");

  pTitle.innerText = title;
  pPrice.innerText = price;

  div.append(pTitle, pPrice);
  sectionProd.appendChild(div);

  div.ondblclick = (event) => {
    alert(event.target.innerText);
  }
}

function newProducts(){
  sectionProd.innerHTML = "";
  for(let i = 0; i < products.length; i++){
    createNode(products[i].title, products[i].price);
  }
}
