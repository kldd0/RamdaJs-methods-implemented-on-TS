export const curry: ICurry = (func: (...args: Array<any>) => any) => {
    function loop(callback: (...args: Array<any>) => any, ...local: Array<any>) {
        if (callback.length <= local.length) {
            return callback(...local);
        } else {
            return (...args: Array<any>) => loop(func, ...local.concat(args));
        }
    }

    return (...args: Array<any>) => loop(func, ...args);
};

interface ICurry {
    <A, B, R>(cb: (a: A, b: B) => R): ICurriedFunction2<A, B, R>;

    <A, B, C, R>(cb: (a: A, b: B, c: C) => R): ICurriedFunction3<A, B, C, R>;
}

interface ICurriedFunction2<A, B, R> {
    (param1: A): (param2: B) => R;

    (param1: A, param2: B): R;
}

interface ICurriedFunction3<A, B, C, R> {
    (param1: A): (param2: B) => (params3: C) => R;

    (param1: A, param2: B): (params3: C) => R;

    (param1: A): (param2: B) => (params3: C) => R;

    (param1: A, param2: B, param3: C): R;
}
