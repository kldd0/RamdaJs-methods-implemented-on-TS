
function where(arg: Object = {}) {
    //const ar: Array<boolean> = [];
    return (obj: Object = {}) => {
        Object.entries(arg).forEach(([key, val]) => {
            val(obj[key])
        });
    }
};

const pred = where({
   a: (a: any, b = 'foo'): boolean => a == b, // equals
   x: (a: number, b = 10): boolean => a > b, // gt
   y: (a: number, b = 20): boolean => a < b //lt
});

console.log(pred({a: 'foo', x: 11, y: 19}));
// console.log(pred({a: 'fo', x: 12, y: 19}));
// console.log(pred({a: 'foo', x: 9, y: 19}));
// console.log(pred({a: 'xxx', x: 11, y: 29}));


