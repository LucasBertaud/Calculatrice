import {describe, it, expect, assert} from 'vitest';
import Calculator from '../Utils/Calculator';

describe('add', () => {
    it('should substract with 2 numbers', () => {
        expect(Calculator.subtract(27, 9)).toBe(18);
        expect(Calculator.subtract(-43, -24)).toBe(-19);
        expect(Calculator.subtract(24, 0)).toBe(24);
    });

    it("should throw an error if one of the inputs is not a number", () => {
        try {
            Calculator.subtract("test", "substract");
            assert.fail("It should throw an error");
        } catch (e: any) {
            expect(e.message).toBe("Invalid input, it should be a number");
        }
    });
})