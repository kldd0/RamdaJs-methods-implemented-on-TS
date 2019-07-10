function clone(obj: any) {
    var copy: any;
    if (null == obj || "object" != typeof obj) return obj;
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

console.log(clone(['a', 'b', 'c', 'd']));