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
