//const multiply = a => a * 2;
const multiply = (a, b) => a * b;
const addOne = x => x + 1;
const square = x => x * x;
const negate = x => x = -x;



function pipe(...fns) {
  return (...args) => {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, ...args);
  };
};


console.log(pipe(multiply, addOne, square)(3, 4));




