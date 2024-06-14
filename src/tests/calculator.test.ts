import {describe, it, expect, assert} from 'vitest';
import Calculator from '../utils/calculator';

describe('calculator', () => {
    let calculator : Calculator;

    it('should calculate with all priority', () => {
        calculator = new Calculator("42 + 2 * 5 /4 - (4 + 2) * 2");

        expect(calculator.getResult()).toBe(32.5);
        expect(calculator.getResult()).toBeTypeOf('number');
    });

    it('should calculate with only additions and subtractions', () => {
        calculator = new Calculator("42 + 2 - 5 - 4 + 2");

        expect(calculator.getResult()).toBe(37);
        expect(calculator.getResult()).toBeTypeOf('number');
    });

    it('should calculate with only multiplications and divisions', () => {
        calculator = new Calculator("42 * 2 / 5 * 4");

        expect(calculator.getResult()).toBe(67.2);
        expect(calculator.getResult()).toBeTypeOf('number');
    });

    it('should throw an error if the operation is invalid because of non-numeric character', () => {
        try {
            const calculator = new Calculator("test");
            assert.fail("should throw an error");
        } catch (e: any) {
            console.log(e.message)
            expect(e.message).toBe("Invalid operation, it should return a number");
        }
    });

    it('should throw an error if the operation is invalid because of strange operand', () => {
        try {
            const calculator = new Calculator("5 ++ 4");
            assert.fail("should throw an error");
        } catch (e: any) {
            console.log(e.message)
            expect(e.message).toBe("Invalid operation, it should return a number");
        }
    });
});