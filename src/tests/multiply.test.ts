import {describe, it, expect, assert} from 'vitest';
import Operand from '../utils/operand';

describe('multiply', () => {
    it('should multiply with 2 numbers', () => {
        expect(Operand.multiply(26, 10)).toBe(260);
        expect(Operand.multiply(5, -14)).toBe(-70);
        expect(Operand.multiply(1234, 0)).toBe(0);
    });

    it("should throw an error if one of the inputs is not a number", () => {
        try {
            Operand.multiply("string", 5);
            assert.fail("It should throw an error");
        } catch (e: any) {
            expect(e.message).toBe("Invalid input, it should be a number");
        }
    });
})