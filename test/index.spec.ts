import { add, pipe, mul, sub } from '../src';


describe('Test', () => {

    it('pipe', () => {
        const result = pipe(
            add(1),
            mul(2),
            sub(3)
        );

        expect(result(10)).toBe(-19);
    });

    it('add', () => {
        const addOne = add(1);

        expect(addOne(4)).toBe(5);
        expect(addOne(7)).toBe(8);
        expect(add(3, 5)).toBe(8);
        expect(add(5)(9)).toBe(14);
    });

    // TODO add tests for method "sub"
    it('sub', () => {
        const subFour = sub(4);

        expect(subFour(5)).toBe(-1);
        expect(subFour(8)).toBe(-4);
        expect(sub(8, 3)).toBe(5);
        expect(sub(15)(7)).toBe(8);        
    });


    // TODO add tests for method "mul"

    it('mul', () => {
        const mulFive = mul(5);

        expect(mulFive(5)).toBe(25);
        expect(mulFive(6)).toBe(30);
        expect(mul(5, 9)).toBe(45);
        expect(mul(7)(8)).toBe(56);
    });

});
