/*
    R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}

    R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
*/

function assocPath(arr: Array<string>, el: any, obj: any) {
    function clone(obj: any) {
        
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


console.log(assocPath(['a', 'b', 'c'], 42, { a: { b: { c: 0 } } }));
console.log(assocPath(['a', 'a', 'b', 'c'], 42, { a: { a: { b: { c: 0 } } } }));
console.log(assocPath(['a', 'b', 'c'], 42, { a: 5 }));
console.log(assocPath(['name', 'first'], 'new name', person)); ///  Object {name: Object {first: "new name", last: "LASTNAME"}} +
console.log(assocPath(['name', 'initials'], 'F L', person)); ///  Object {name: Object {first: "FIRSTNAME", initials: "F L", last: "LASTNAME"}} +
console.log(person);


// function clone1(obj: any) {
//     let nwOb: any = {};
//     Object.entries(obj).map(([key, value]) => {
//         nwOb[key] = JSON.parse(JSON.stringify(value));
//     });
//     return nwOb;
// }

// function clone2(obj: any) {
//     let nwOb: any = {};
//     Object.keys(obj).forEach(key => {
//         nwOb[key] = JSON.parse(JSON.stringify(obj[key]));
//     });
//     return nwOb;
// }



function clone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}


let obj = {a: {b: {c: 4}}};
// console.log(Object.entries(obj));
// let newO = clone1(obj);
let nw = clone(obj);
console.log(nw);
delete nw.a.b;
console.log(nw);
console.log(obj);






