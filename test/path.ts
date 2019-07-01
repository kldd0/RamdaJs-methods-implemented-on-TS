/*
    R.path(['a', 'b'], {a: {b: 2}}); //=> 2
    R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
*/
function path(arr: any, obj: any) {
    function search(obj: any, arr: any): any {
        let first = arr.shift();
        if (obj.hasOwnProperty(first) && typeof(obj[first]) === 'object')
            return search(obj[first], arr); 
        else return obj[first];
    }
    return search(obj, arr)
}

console.log(path(['a', 'b'], {a: {b: 2}}));
console.log(path(['a', 'b'], {c: {b: 2}}));
console.log(path(['a', 'b', 'c'], {a: {b: {c: 3}}}));
