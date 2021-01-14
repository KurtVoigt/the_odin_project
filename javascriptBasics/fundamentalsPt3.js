function add7(num){
    return num+7;
}
function multiply(num1, num2){
    return num1*num2;
}
function capitalize(string){
    string = string.charAt(0).toUpperCase()+string.slice(1);
    return string;
}
function lastLetter(string){
    index = string.length-1;
    return string[index];
}

console.log(add7(1));
console.log(multiply(4,5));
console.log(capitalize("capitalize"));
console.log(lastLetter("should be the letter R"));