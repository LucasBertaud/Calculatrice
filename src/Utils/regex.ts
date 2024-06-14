export default class Regex {
    public static WithoutParenthesis = new RegExp(/(?<=\()\s*\d+(\.\d+)?\s*[+*/-]\s*\d+\s*(\.\d+)?(?=\))/);
    public static WithParenthesis = new RegExp(/[(]\s*\d+(\.\d+)?\s*[+*-\/]\s*\d+(\.\d+)?\s*[)]/);
    public static MultiplyOrDivide = new RegExp(/\d+(\.\d+)?\s*[*/]\s*\d+(\.\d+)?/);
    public static AddOrSubtract = new RegExp(/\d+(\.\d+)?\s*[+-]\s*\d+(\.\d+)?/);
    public static findOperand = new RegExp(/[+*\-/]/);
    public static findAnyCharacterNotNumber = new RegExp(/[^0-9.]/);
}
