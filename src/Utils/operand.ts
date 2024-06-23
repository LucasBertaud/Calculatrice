import { HttpForbidden } from "@httpx/exception";

export default class Operand 
{   
    public static add(a: number, b: number): number {
        if (isNaN(a) || isNaN(b)){
            throw new HttpForbidden("Invalid input, it should be a number");
        }
        return a + b;
    }

    public static divide(a: number, b: number): number {
        if (isNaN(a) || isNaN(b)){
            throw new HttpForbidden("Invalid input, it should be a number");
        }
        if (b === 0) {
            throw new HttpForbidden("Invalid input, division by zero");
        }
        return a / b;
    }

    public static multiply(a: number, b: number): number {
        if (isNaN(a) || isNaN(b)){
            throw new HttpForbidden("Invalid input, it should be a number");
        }
        return a * b;
    }

    public static subtract(a: number, b: number): number {
        if (isNaN(a) || isNaN(b)){
            throw new HttpForbidden("Invalid input, it should be a number");
        }
        return a - b;
    }
}