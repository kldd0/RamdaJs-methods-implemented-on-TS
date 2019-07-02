/*
    R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}

    R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
*/

function assocPath(arr: any, num: any, obj: any) {
    let ob: any = {};
    function pass(array: any, obj: any): any {
        let first = array.shift();
        if (obj.hasOwnProperty(first) && typeof(obj[first]) === 'object' && array.length !== 0) pass(array, obj[first]);
        else if (obj.hasOwnProperty(first) && typeof(obj[first]) !== 'object' && array.length !== 0) createObj(arr, ob);
        else obj[first] = num; return obj;
    }
    function createObj(arr: any, obj: any) {
        let first: any = arr.shift()        
        if (arr.indexOf(first) < arr.length - 1) { 
            obj[`${first}`] = new Object();
            createObj(arr, obj[`${first}`]);
        } else {
            obj[`${first}`] = num;
        }
        return obj;
    }
    
    return pass(arr, obj);
}

const person = {
    name: {
        first: "FIRSTNAME",
        last: "LASTNAME"
    }
}

// console.log(assocPath(['name', 'first'], 'new name', person)); ///  Object {name: Object {first: "new name", last: "LASTNAME"}} +
console.log(assocPath(['name', 'initials'], 'F L', person)); ///  Object {name: Object {first: "FIRSTNAME", initials: "F L", last: "LASTNAME"}} 



console.log(assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}));
console.log(assocPath(['a', 'b', 'c'], 42, {a: 5}));



// console.log(arr['c']);

/** 
function assocPath(arr: any, num: number , obj: any) {
    let changedObj: any;
    function finish(arr: any, obj: any) {
        obj[arr[arr.length-1]] = num;
        return changedObj;
    }
    function Do(arr: any, obj: any): any {
        let first = arr.shift();
        if (arr.indexOf(first) < arr.length - 1) {
            obj = {};
            obj.first = {};
            return Do(arr, obj.first);
        } else {
            return finish(arr, obj.first)
        } 
    }
    function pass(arr: any, obj: any) {
        let first = arr.shift();
        if (obj.hasOwnProperty(first) && typeof(obj[first]) === 'object' && arr.length !== 0) pass(arr, obj[first]);
        else if (obj.hasOwnProperty(first) && typeof(obj[first]) !== 'object' && first !== arr[arr.length - 1]) Do(arr, obj);
        else Do(arr, obj);
    }
    return pass(arr, obj)
}

*/
let arr = ['a', 'b', 'c'];
// let first = arr.shift();
// console.log(first);
let ar = arr;
// console.log(ar);

let obj: any = {a: 5};
// console.log(obj['a']);


// obj[`${first}`] = 23;
// console.log(obj)
