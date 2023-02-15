// \w{1,}[@]\w{2,}[.]\w{2,}[.]{0,1}\w{0,}

// let string = 'tigran@mail.com.ru'
// let reg = /\w{1,}[@]\w{2,}[.]\w{2,}[.]{0,1}\w{0,}/
// let result = string.match(reg)



// let string = 'test1test7test9test20';
// let reg = /\d+/
// let result = string.match(reg)

// console.log(result)

// let date = new Date('2023-01-20 9:30:00 GMT')
// console.log(date);

// Задача 1. 
// Напишите функцию getWeekDay(), которая в зависимости от даты (текущего момента времени) в консоль выводит день недели

// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'

function getWeekDay(){
  let date = new Date;
  if(date.getDay == 0){
    console.log("today is Sunday");
  } else if(date.getDay() == 1){
    console.log("today is Monday");
  } else if(date.getDay() == 2){
    console.log("today is Tuesday");
  } else if(date.getDay() == 3){
    console.log("today is Wednesday");
  } else if(date.getDay() == 4){
    console.log("today is Thursday");
  } else if(date.getDay() == 5){
    console.log("today is Friday");
  } else 
    console.log("Saturday");
}

getWeekDay()
