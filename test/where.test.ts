
function where(arg: Object) {
    const ar: Array<boolean> = [];
    return (obj: Object) => {
        Object.keys(arg).forEach((el) => {
            ar.push(arg[el](obj[el]));
        });
        console.log(ar.every(elem => elem == true) + '\n');
    }
};

const pred = where({
   a: (a: any, b = 'foo'): boolean => a == b, // equals
   x: (a: number, b = 10): boolean => a > b, // gt
   y: (a: number, b = 20): boolean => a < b //lt
});

pred({a: 'foo', x: 11, y: 19});
pred({a: 'fo', x: 12, y: 19});
pred({a: 'foo', x: 9, y: 19});
pred({a: 'xxx', x: 11, y: 29});


//.every(elem => elem == true)
//console.log(arg[el](obj[el]));
  //          return arg[el](obj[el]);