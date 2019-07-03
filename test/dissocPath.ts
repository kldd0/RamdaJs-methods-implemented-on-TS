function dissocPath(arr: any, obj: any) {
    let ob: any = JSON.parse(JSON.stringify(obj));
    function search(array: any, obj: any): any {
        let first = array.shift();
        if (obj.hasOwnProperty(first) && typeof(obj[first]) === 'object' && array.length !== 0) search(array, obj[first]);
        else delete obj[first] 
        return obj;
    }
    return search(arr, ob);
}

console.log(dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}})); //=> {a: {b: {}}}

const Person = {
    name: {
        first: "FIRSTNAME",
        last: "LASTNAME",
        initials: 'F L'
    }
}
console.log(dissocPath(['name', 'initials'], Person));
console.log(Person);




