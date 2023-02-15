// const btn = document.querySelector("button");
// const name = document.querySelector("#first-name");

// btn.onclick = (event) => {
//   event.preventDefault();
//   alert(name.value);
// }

// const btn = document.querySelector("button");

// form
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");

//form2
const form2 = document.querySelector("#form2");
const filterInput = document.querySelector("#filter");

let sortBtn = document.querySelector("#sortPrice");

// section with products
const sectionProd = document.querySelector("#products");

const h2 = document.createElement("h2");
h2.innerText = "Cart is Empty!";
h2.style = "font-size: 40px; text-align: center";
sectionProd.append(h2);


let products = [];
titleInput.setAttribute("required", "true");
priceInput.setAttribute("required", "true");

let form = document.querySelector("#form");

form.onsubmit = (e) => {
  e.preventDefault();

  const title = titleInput.value.toLowerCase();

  products.push(
    {
      title: title,
      price: priceInput.value,
    });

  newProducts(products);
  // createNode(titleInput.value, priceInput.value);

  titleInput.value = "";
  priceInput.value = "";
}

function createNode(index, title, price) {
  let div = document.createElement("div");
  div.classList.add("products");

  let pTitle = document.createElement("p");
  let pPrice = document.createElement("p");

  pTitle.innerText = title;
  pPrice.innerText = price;

  let close = closeBtn();

  close.onclick = () => {
    close.removeEventListener("dblclick", () => {
      alert(title);
    })
    result = [];
    sectionProd.removeChild(div);
    if (products.length > 1) {
      for (let i = 0; i < products.length; i++) {
        if (i !== index) { result.push(products[i]); }
      }
    }
    products = result;
    console.log(products);
    if (!products.length) {
      sectionProd.append(h2);
    }
  }

  div.append(pTitle, pPrice, close);

  div.onmouseover = () => {
    close.style.opacity = "1";
  }

  div.onmouseout = () => {
    close.style.opacity = "0";
  }

  sectionProd.appendChild(div);

  div.ondblclick = (event) => {
    alert(event.target.innerText);
  }
}

function newProducts(array) {
  sectionProd.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    createNode(i, array[i].title, array[i].price);
  }
}
// function newProducts() {
//   sectionProd.innerHTML = "";
//   for (let i = 0; i < products.length; i++) {
//     createNode(i, products[i].title, products[i].price);
//   }
// }

function closeBtn() {
  let btn = document.createElement("button");
  btn.innerText = "X";
  btn.classList.add("close");
  return btn;
}

// form2.onsubmit = (e) => {
//   e.preventDefault();
  
//   let filter = filterInput.value;
//   sectionProd.innerHTML = "";
//   for (let i = 0; i < products.length; i++){
//     if (products[i].title === filter) {
//       createNode(i, products[i].title, products[i].price);
//     }
//   }
// }

form2.onsubmit = (e) => {
  e.preventDefault();
  
  let filter = filterInput.value;

  let filteredArray = [];
  for (let i = 0; i < products.length; i++){
    if (products[i].title === filter) {
      filteredArray.push(products[i]);
    }
  }
  newProducts(filteredArray);
  }

sortBtn.onclick = () => {
  products.sort((a,b) => a.price - b.price);
  newProducts(products);
}