//1задание
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('Love JavaScript(No)')); 
//2задание не знаю как решить
//3 задание
function nsd(a, b) {
    if (b === 0) {
        return a; 
    }
    return nsd(b, a % b);
}


console.log(nsd(5 , 45)); 


