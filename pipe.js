const multiply = (a, b) => a * b;
const addOne = x => x + 1;
const square = x => x * x;

//
// const f = (...args) => {
//   for (var i = 0; i < args.length; i++) {
//     args[i];
//   }
// }
//

//
// console.log(f(pipe(3, 4)));


// const prop = (...args) =>  args.length > 1 ? args[1][args[0]] : data => data[args[0]];


// function pipe(...args) {
//   function() {
//   if (args.length > 1) {
//     for (var i = 0; i < args.length; i++) {
//       args[i][args[i - 1]];
//     }
//   } else {
//     data => {
//       args[data];
//     }
//   }
// }

// function repeat(action) {
//   return (args) => {
//     action(...args);
//   }
// }
//
// console.log(repeat(4, square));
// console.log(repeat(4, console.log));
// console.log(square(4));




// let args = [3, 4, 6, 7, 9, 0, 5, 34, 5, 6, 7, 3]
// console.log(...args);

// function pipe(fn) {
//    return (...args) => {
//      if (fn.length > 1) {
//        for (var i = 0; i < fn.length; i++) {
//          fn[fn.length - 1](...args)
//        }
//       } else {
//        fn(...args);
//      }
//    }
// }
//
// console.log(pipe(multiply)(3, 4));


// const operate = (x, y) =>
//multiply, square, addOne

function fn(...action) {
  return (...args) => {
    if (action.length > 1) {
      return action.map(item => {
        return item(...args);
      });
    } else {
      action(...args);
    }
  }
}

// console.log(fn(multiply, addOne, square)(3, 4));


function arg(...args) {
  console.log(args);
  console.log(multiply(...args));
}
// arg(3, 4);
// arg(multiply, addOne, square);




function pipe(...action) {
  return (...args) => {
    for (let i = 0; i < 1; i++) {
      if (i == 0) {
        action[i](...args);
      } else {
        action[i](action[i - 1]);
      }
    }
  }
}


console.log(pipe(multiply, addOne, square)(3, 4));
