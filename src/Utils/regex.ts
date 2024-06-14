export default class Regex {
    public static WithoutParenthesis = new RegExp(/(?<=\()\d+(\.\d+)?\s*[+*/-]\s*\d+(\.\d+)?(?=\))/);
    public static WithParenthesis = new RegExp(/[(]\d+(\.\d+)?\s*[+*-/]\s*\d+(\.\d+)?[)]/);
    public static MultiplyOrDivide = new RegExp(/\d+(\.\d+)?\s*[*/]\s*\d+(\.\d+)?/);
    public static AddOrSubtract = new RegExp(/\d+(\.\d+)?\s*[+-]\s*\d+(\.\d+)?/);
    public static findOperand = new RegExp(/[+*\-/]/);
    public static findAnyCharacterNotNumber = new RegExp(/[^0-9.]/);
}
