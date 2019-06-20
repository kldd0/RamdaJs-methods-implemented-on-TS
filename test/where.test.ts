
<<<<<<< HEAD
function where(arg: any = {}) {
    return (obj: any = {}) => {
        return Object.entries(arg).map(([key, value]: any) => {
           return value(obj[key]);
        }).every((elem: any) => elem === true);         
=======
function where(arg: Object) {
    const ar: Array<boolean> = [];
    return (obj: Object) => {
        Object.keys(arg).forEach((el) => {
            ar.push(arg[el](obj[el]));
        });
        console.log(ar.every(elem => elem === true) + '\n');
>>>>>>> 66dc16de4b709cd633fe2c0b6ecbeeeccfff131a
    }
};

const pred = where({
   a: (a: any, b = 'foo'): boolean => a == b, // equals
   x: (a: number, b = 10): boolean => a > b, // gt
   y: (a: number, b = 20): boolean => a < b //lt
});

<<<<<<< HEAD
console.log(pred({a: 'foo', x: 11, y: 19}));
console.log(pred({a: 'fo', x: 12, y: 19}));
console.log(pred({a: 'foo', x: 9, y: 19}));
console.log(pred({a: 'xxx', x: 11, y: 29}));







//.forEach(([key, value]) => {
  //  return key;
//});
//console.log(`key: (${key})  Value:${value}`);
=======
pred({a: 'foo', x: 11, y: 19});
pred({a: 'fo', x: 12, y: 19});
pred({a: 'foo', x: 9, y: 19});
pred({a: 'xxx', x: 11, y: 29});
>>>>>>> 66dc16de4b709cd633fe2c0b6ecbeeeccfff131a
