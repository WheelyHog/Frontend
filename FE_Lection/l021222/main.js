// let clickTarget = (e) => {
//   e.target.style.display = "none";
// }
// div.onclick = (e) = clickTarget(e);

// ЗАДАЧА 1) Создайте приветственное сообщение на странице : 
// 1) Получение имени пользователя в поле ввода 
// 2) При нажатии кнопки добавьте событие, которое получит имя пользователя и создаст приветственное сообщение на странице. 
// 3) Добавьте проверку, чтобы убедиться, что длина вводимых данных больше 3 символов.

// let btn = document.querySelector("button");
// let input = document.querySelector("input");
// let h2 = document.querySelector("h2");

// btn.onclick = () => {
//   h2.innerText = (input.value.length > 2) ? "Welcome home, dear " + input.value : "Name must have more than 2 symbols. Try again!";
// }
// let name = input.value;
// if (name.length > 2) {
//   h2.innerText = 
// } else ;

// создать 2 инпута и кнопку. 

// По нажатию на кнопку во втором инпуте появится квадрат числа из первого инпута. Если введено не число - должна показаться ошибка.(в виде alert). 
// Обратите внимание, что изменять значение во  втором input-е нельзя!

// let btn = document.querySelector("button");
// let inputNum1 = document.querySelector("input[name='firstNum']");
// let inputNum2 = document.querySelector("input[name='secondNum']");

// btn.onclick = () => isNaN(+inputNum1.value) ? alert("It's not a number!") : inputNum2.value = inputNum1.value ** 2;
  
// В html добавлены 10 параграфов и одна кнопка.При нажатии на кнопку текст в каждом абзаце поменяется - спереди добавится порядковый номер абзаца.

const pList = document.querySelectorAll("p");
const btn = document.querySelector("button");

btn.onclick = () => {
  for (let i = 0; i < pList.length; i++){
    pList[i].innerHTML = i + 1 + " " + pList[i].innerHTML;
  }

}
