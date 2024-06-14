import {describe, it, expect, assert} from 'vitest';
import Calculator from '../Utils/Calculator';

describe('add', () => {
    it('should add with 2 numbers', () => {
        expect(Calculator.add(34, 7)).toBe(41);
        expect(Calculator.add(-5, -1)).toBe(-6);
        expect(Calculator.add(0, 0)).toBe(0);
    });

    it("should throw an error if one of the inputs is not a number", () => {
        try {
            Calculator.add(1, "test");
            assert.fail("It should throw an error");
        } catch (e: any) {
            expect(e.message).toBe("Invalid input, it should be a number");
        }
    });
})