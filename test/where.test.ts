
export const lt = (a: number, b: number): boolean => a < b;
export const gt = (a: number, b: number): boolean => a > b;
export const equals = (a: any, b: any): boolean => a == b;


function where(arg: Object) {
    return (obj: Object) => {
        for(let key in arg) {
            return arg[key];
        }
    }
};

const pred = where({
   a: equals(obj[a], 'foo'),
   x: gt(obj[x], 10),
   y: lt(obj[y], 20)
});

pred({a: 'foo', x: 11, y: 19});

// JS
// const lt = (b) => (a) => a < b;
// const gt = (b) => (a) => a > b;
// const equals = (a, b) => a == b;


// function where(arg) {
//     return (obj) => {
//       for (let key in arg) {
        
//       }
//     }
// };

// where({
//    a: equals('foo'),
//    x: gt(10),
//    y: lt(20)
// })({a: 'foo', x: 11, y: 19});
