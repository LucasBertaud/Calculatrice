import {describe, it, expect, assert} from 'vitest';
import Calculator from '../calculator';

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

    it('should calculate with only substractions', () => {
        calculator = new Calculator("(-42) - 2 - (-5)");

        expect(calculator.getResult()).toBe(39);
        expect(calculator.getResult()).toBeTypeOf('number');
    });

    it('should throw an error if the operation is invalid because of non-numeric character', () => {
        try {
            new Calculator("test");
            assert.fail("should throw an error");
        } catch (e: unknown) {
            if (e instanceof Error) {
                expect(e.message).toBe("Invalid operation, it should return a number");
            }
        }
    });

    it('should throw an error if the operation is invalid because of strange operand', () => {
        try {
            new Calculator("5 ++ 4");
            assert.fail("should throw an error");
        } catch (e: unknown) {
            if (e instanceof Error) {
                expect(e.message).toBe("Invalid operation, it should return a number");
            }
        }
    });
});