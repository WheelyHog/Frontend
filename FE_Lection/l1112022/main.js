// const array = [1,2,3, "Name",5];
// console.log(array);
// console.log(array.length);

// array.push(7,8);

// array.pop();

// const arr = []
// for (let i=0; i <5; i++){
//   arr.push(prompt("enter number :"));
// }
// console.log(arr);
// console.log(typeof(arr[length-1]));

// const arr1 = [1,5,8,56,5,6,4,7];
// const arr2 = [];
// for (let i = 0; i < arr1.length; i++){
//   if (arr1[i] % 2 == 0){
// arr2.push(arr1[i]);
//   }
// }
// console.log(arr2);

// const arr1 = [1,5,8,56,5,6,4,7];

// for (let i = 0; i < arr1.length; i++){
//   if (i % 3 == 0 && i !=0){
//     console.log(arr1[i]);
//   }
// }

// const array = [0, 2, 2, 3, 4, 5, 7, 8, 8];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] == i) {
//     result += array[i];
//     console.log(i);
//   }
// }
// console.log("_____________");
// console.log(result);

// const newArray = [ , , , ];
// console.log(newArray);

let array = [-2, 4, -10, 8,5,8,6,1,2,9];
let even = 0;
let odd = 0;
for (let i = 0; i < array.length; i++){
  if(array[i] % 2 == 0){
    even += array[i];
  } else {
    odd += array[i];
  }
}
if (even > odd) {
  console.log(even - odd);
} else console.log(odd - even);