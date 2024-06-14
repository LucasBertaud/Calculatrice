import Calculator from "./calculator"

export default function setupInput(input: HTMLDivElement){    
    const addNumber = (number: string) => {
        input.innerHTML = `${input.innerHTML}${number}`
    }
    
    const addOperator = (operator: string) => {
        input.innerHTML = `${input.innerHTML} ${operator} `
    }

    const clearInput = () => {
        input.innerHTML = "";
    }

    const result = () => {
        try {
            const result = new Calculator(input.innerHTML).getResult();
            input.innerHTML = result.toString();
        } catch (e){
            input.innerHTML = "Error";
        }
        
    }

    const buttons = document.querySelectorAll("div.buttons .btn");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let value = button.innerHTML;

            if (input.innerHTML === "Error") {
                clearInput();
            }
            
            switch (value) {
                case "C":
                    return clearInput();
                case "=":
                    return result();
                case "×":
                case "÷":
                case "+":
                case "-":
                    if (value === "÷") {
                        value = "/";
                    }
                    if (value === "×") {
                        value = "*";
                    }
                    return addOperator(value);
                default:
                    return addNumber(value);
            }
        });
    });
}