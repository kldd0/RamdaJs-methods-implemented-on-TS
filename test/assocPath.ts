/*
    R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}

    R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
*/

function assocPath(arr: Array<string>, el: any, obj: any) {
    function clone(obj: any) {
        var copy: any;
        if (obj === null || typeof obj !== 'object') return obj;
        if (obj instanceof Object) {
            copy = {};
            for (let elem in obj) {
                copy[elem] = clone(obj[elem]);
            }
            return copy;
        } 
        if (obj instanceof Array) {
            copy = [];
            for (let i = 0; i < obj.length; i++) {
                copy[i] = clone(obj[i]);
            }
            return copy;
        }
    }
    let ob: any = clone(obj);
    function pass(array: any, obj: any): any {
        let ar = arr.slice();
        let first = array.shift();
        if (obj.hasOwnProperty(first) && typeof (obj[first]) === 'object' && array.length !== 0) pass(array, obj[first]);
        else if (obj.hasOwnProperty(first) && typeof (obj[first]) !== 'object' && array.length !== 0) return createObj(ar, obj);
        else obj[first] = el; return obj;
    }
    function createObj(arr: any, obj: any) {
        let first: any = arr.shift()
        if (arr.indexOf(first) < arr.length - 1) {
            obj[`${first}`] = {};
            createObj(arr, obj[`${first}`]);
        } else {
            obj[`${first}`] = el;
        }
        return obj;
    }

    return pass(arr, ob);
}

const person = {
    name: {
        first: "FIRSTNAME",
        last: "LASTNAME"
    }
}


// console.log(assocPath(['a', 'b', 'c'], 42, { a: { b: { c: 0 } } }));
// console.log(assocPath(['a', 'a', 'b', 'c'], 42, { a: { a: { b: { c: 0 } } } }));
// console.log(assocPath(['a', 'b', 'c'], 42, { a: 5 }));
console.log(assocPath(['name', 'first'], 'new name', person)); ///  Object {name: Object {first: "new name", last: "LASTNAME"}} +
console.log(assocPath(['name', 'initials'], 'F L', person)); ///  Object {name: Object {first: "FIRSTNAME", initials: "F L", last: "LASTNAME"}} +
console.log(person);






