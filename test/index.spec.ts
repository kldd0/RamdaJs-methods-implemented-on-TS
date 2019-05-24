import { add, IPipe, mul, sub } from '../src';

// TODO    Убрать отсюда строку ниже, убрать "IPipe" из импорта
// TODO    заменить на "pipe", добавив реализацию в файл "pipe.ts"
declare const pipe: IPipe;

describe('Test', () => {

    it('pipe', () => {
        const result = pipe(
            add(1),
            mul(2),
            sub(3)
        );

        expect(result(10)).toBe(19);
    });

    it('add', () => {
        const addOne = add(1);

        expect(addOne(4)).toBe(5);
        expect(addOne(7)).toBe(8);
        expect(add(3, 5)).toBe(8);
        expect(add(5)(9)).toBe(14);
    });

});
