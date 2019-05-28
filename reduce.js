/*
REDUCE function

*/

function reduce(arr, callback, startValue) {
  let acc = startValue;
  for (var i = 0; i < arr.length; i++) {
    let currv = arr[i];
    acc = callback(acc, currv, i, arr);
  }
  return acc;
}
