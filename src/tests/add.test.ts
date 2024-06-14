import {describe, it, expect, assert} from 'vitest';
import Operand from '../utils/operand';

describe('add', () => {
    it('should add with 2 numbers', () => {
        expect(Operand.add(34, 7)).toBe(41);
        expect(Operand.add(-5, -1)).toBe(-6);
        expect(Operand.add(0, 0)).toBe(0);
    });

    it("should throw an error if one of the inputs is not a number", () => {
        try {
            Operand.add(1, "test");
            assert.fail("It should throw an error");
        } catch (e: any) {
            expect(e.message).toBe("Invalid input, it should be a number");
        }
    });
})