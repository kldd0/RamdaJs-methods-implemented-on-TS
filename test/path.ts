/*
    R.path(['a', 'b'], {a: {b: 2}}); //=> 2
    R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
*/
function path(arr: any, obj: any) {
    let i = 0;
    function search(arg: any): any { 
        for (let key of Object.keys(arg)) {
            if (arr[i] === key) {
                if (arg[key] !== Object) {
                    return arg[key];
                } else {
                    arr.splice(i, 1);
                    return search(arg[key]);
                }
            } else {
                return undefined;
            }
        }
    }
    return search(obj);
}

console.log(path(['a', 'b'], {a: {b: 2}}));
console.log(path(['a', 'b'], {c: {b: 2}}));