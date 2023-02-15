function findMissing(arr) {
  let low = 1,
    high = arr.length,
    mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid - 1] === mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}
console.log(findMissing([1, 2, 6, 31]))

function findFirstMissing(array, start, fin) {
  while (start <= fin) {
    let mid = Math.floor((start + fin) / 2);

    if (array[mid - 1] === mid) {
      start = mid + 1;
    } else {
      fin = mid - 1;
    }
  }
  return start;
}

let array = [1, 2, 3, 6, 31]
console.log(findFirstMissing(array, 1, array.length));

