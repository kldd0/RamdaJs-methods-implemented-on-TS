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

});
