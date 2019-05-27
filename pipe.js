//const multiply = a => a * 2;
const multiply = (a, b) => a * b;
const addOne = x => x + 1;
const square = x => x * x;
const negate = x => x = -x;


// function pipe(...action) {
//   return (...args) => {
//     for (let i = 0; i < action.length; i++) {
//       if (action.length == 1) {
//         return action[i](...args);
//         break;
//       } else if (i != 0 && action.length > 2) {
//         return action[i + 1](action[i](action[i - 1](...args)));
//         break;
//       } else if (i != 0){
//         return action[i](action[i - 1](...args));
//       }
//     }
//   }
// }
//
//
// console.log(pipe(multiply, addOne, square)(3, 4));
// console.log(pipe(Math.pow, negate, addOne)(3, 4));
// console.log(pipe(multiply, square)(3, 4));
// console.log(pipe(multiply)(3, 4));
// console.log(pipe(multiply, negate)(3, 4));


function pipe(...fns) {
  return (args) => {
    fns.reduce((acc, fn) => {
      console.log(fn);
       return fn(acc);
    }, ...args);
  }
}



console.log(pipe(multiply, addOne, square)([2, 3]));
// console.log(pipe(multiply, addOne, square)(3, 4));
//console.log(pipe(1, 2, 4, 5, 6, 7, 8, 9, 0));

const test = (arg) => {
  console.log(...arg);
  console.log(arg);
  console.log(multiply(...arg));
}

test([3, 4])
