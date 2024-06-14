import { HttpForbidden } from "@httpx/exception";
import Operand from "./operand";
import Regex from "./regex";

export default class Calculator 
{   
    private result : number = 0;
    
    constructor(operation: string) {
        this.calculate(operation);
    }

    private calculate(operation: string) : void {
        // priorité des parenthèses avec lecture de gauche à droite
        while(Regex.WithoutParenthesis.test(operation)){
            const matchWithoutParenthesis = operation.match(Regex.WithoutParenthesis);
            const matchWithParenthesis = operation.match(Regex.WithParenthesis);

            if(matchWithoutParenthesis && matchWithParenthesis){
                const operand = matchWithoutParenthesis[0].match(Regex.findOperand);
                if (operand) {
                    const numbers = matchWithoutParenthesis[0].split(operand[0]);
                    const result = this.operand(operand[0], parseFloat(numbers[0]), parseFloat(numbers[1]));
                    operation = operation.replace(matchWithParenthesis[0], result.toString());
                }
            }
        }

        // priorité des multiplications et divisions avec lecture de gauche à droite
        while(Regex.MultiplyOrDivide.test(operation)){
            const match = operation.match(Regex.MultiplyOrDivide);
            if (match) {
                const operand = match[0].match(Regex.findOperand);
                if (operand) {
                    const numbers = match[0].split(operand[0]);
                    const result = this.operand(operand[0], parseFloat(numbers[0]), parseFloat(numbers[1]));
                    operation = operation.replace(match[0], result.toString());
                }
            }
        }

        // priorité des additions et soustractions avec lecture de gauche à droite
        while(Regex.AddOrSubtract.test(operation)){
            const match = operation.match(Regex.AddOrSubtract);
            if (match) {
                const operand = match[0].match(Regex.findOperand);
                if (operand) {
                    const numbers = match[0].split(operand[0]);
                    const result = this.operand(operand[0], parseFloat(numbers[0]), parseFloat(numbers[1]));
                    operation = operation.replace(match[0], result.toString());
                }
            }
        }

        if (Regex.findAnyCharacterNotNumber.test(operation)) {
            throw new HttpForbidden("Invalid operation, it should return a number");
        }

        if (isNaN(parseFloat(operation))) {
            throw new HttpForbidden("Invalid operation, it should return a number");    
        }

        this.setResult(parseFloat(operation));
    }

    private operand(operand: string, a: number, b: number): number {
        switch(operand){
            case "+":
                return Operand.add(a, b);
            case "-":
                return Operand.subtract(a, b);
            case "*":
                return Operand.multiply(a, b);
            case "/":
                return Operand.divide(a, b);
            default:
                throw new HttpForbidden("Invalid operand");
        }
    }

    private setResult(result: number): Calculator {
        this.result = result;
        return this;
    }

    public getResult(): number {
        return this.result;
    }
}