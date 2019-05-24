import { curry } from './curry';

export const sub = curry((a: number, b: number): number => a - b);