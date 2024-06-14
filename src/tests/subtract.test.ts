import {describe, it, expect, assert} from 'vitest';
import Operand from '../utils/operand';

describe('add', () => {
    it('should substract with 2 numbers', () => {
        expect(Operand.subtract(27, 9)).toBe(18);
        expect(Operand.subtract(-43, -24)).toBe(-19);
        expect(Operand.subtract(24, 0)).toBe(24);
    });

    it("should throw an error if one of the inputs is not a number", () => {
        try {
            Operand.subtract("test", "substract");
            assert.fail("It should throw an error");
        } catch (e: any) {
            expect(e.message).toBe("Invalid input, it should be a number");
        }
    });
})