// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


// sayHello function
// function sayHello(inputName) {
//     if (inputName === "Alex") {
//         return "Hello, Alex!";
//     } else if (inputName === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

function sayHello(inputName) {
    if ((inputName === undefined) || (typeof inputName === 'boolean')) {
        return "Hello, World!";
    } else {
        return "Hello, " + inputName + "!";
    }
}


function isFive(input) {
    if (!isNaN(input)) {
        return true;
    } else {
        return false;
    }
}


function isEven(input){
    return input % 2 === 0 && input !== false;
}


function isVowel(input){
    return input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u' || input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U';
}


function add(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    } else {
        return parseInt(num1) + parseInt(num2);
    }
}