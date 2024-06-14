import {describe, it, expect, assert} from 'vitest';
import Calculator from '../Utils/Calculator';

describe('divide', () => {
    it('should divide with 2 numbers', () => {
        expect(Calculator.divide(34, 8)).toBe(4.25);
        expect(Calculator.divide(-5, -1)).toBe(5);
        expect(Calculator.divide(50, 0)).toBe(Infinity);
    });

    it("should throw an error if one of the inputs is not a number", () => {
        try {
            Calculator.divide(1, "test");
            assert.fail("It should throw an error");
        } catch (e: any) {
            expect(e.message).toBe("Invalid input, it should be a number");
        }
    });

    it("should throw an error if division by zero", () => {
        try {
            Calculator.divide(0, 0);
            assert.fail("It should throw an error");
        } catch (e: any) {
            expect(e.message).toBe("Invalid input, division by zero");
        }
    });
})