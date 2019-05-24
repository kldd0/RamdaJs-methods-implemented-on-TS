import { curry } from './curry';


export const add = curry((a: number, b: number): number => a + b);
