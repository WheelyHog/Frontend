
// 1 -----------------------------------------------------------------------------------------------------------
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// str = "the-stealth-warrior";

// function toCamelCase(str) {
//   let arr = [];
//   let indexArray = [];
//   let newStr = '';
//   let count = 0;
//   if (str[0] == str.charAt(0).toUpperCase()) {
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "_" || str[i] == "-") {
//       count++;
//       indexArray.push(i - count + 1);
//     } else arr.push(str[i]);
//   }

//   for (let i = 0; i < indexArray.length; i++) {
//     arr[indexArray[i]] = arr[indexArray[i]].toUpperCase();
//   }

//   for (let i = 0; i < arr.length; i++) {
//     newStr = newStr + arr[i];
//   }

//   return newStr;
// }

// toCamelCase(str);


// 2 ---------------------------------------------------------------------------------------------------------------------
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// let a = [1,2];
// let b = [1];
let arr3 = [];
function arrayDiff(a, b) {
    if (a.length == 0) {
      arr3 = a;
    } else if (b.length == 0) {
      arr3 = a;
    } else {
      for (let i = 0; i < b.length; i++){
        arr3 = a.filter((item) => {
        if (item !== b[i]) {
          console.log(item);
          console.log(item !== b[i]);
          return item;
        }
      });
      a = arr3;
    }
    }
    // arr3 = a;
    console.log(arr3);
    return arr3;
  }


arrayDiff([1,2,3], [1,2])