/*
    R.path(['a', 'b'], {a: {b: 2}}); //=> 2
    R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
*/
function path(arr: any, obj: any) {
    function search(obj: any, arr: any): any {
        let first = arr.shift();
        if (obj[first] !== null) {
            if (obj.hasOwnProperty(first) && typeof(obj[first]) === 'object' && arr.length !== 0)
                return search(obj[first], arr); 
            else return obj[first];
        } else return undefined;
    }
    return search(obj, arr);
}

console.log(path(['a', 'b'], {a: {b: 2}}));
console.log(path(['a', 'b'], {c: {b: 2}}));
console.log(path(['a', 'b', 'c'], {a: {b: {c: 3}}}));
console.log(path(['a', 'b', 'c', 'd'], {a: {b: {c: {d: 5}}}}));
console.log(path(['a', 'b'], {a: {b: {c: {d: 5}}}}));
console.log(path(['a', 'b', 'c', 'd'], {a: {b: null}}));
console.log(path(['a', 'b', 'c', 'd'], {a: {b: 7}}));

