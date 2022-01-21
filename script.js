function min(firstNumber, secondNumber){
    if (firstNumber > secondNumber) {
        return secondNumber
    } else {
        return firstNumber
    }
}

console.log(min(5, 15));

function min(firstNumber, secondNumber){
    return ((firstNumber > secondNumber) ? secondNumber : firstNumber);
}

console.log(min(16, 18));


function isEven(number){
    if (number % 2 === 0) {
        return "true"
    }
    else if (number % 2 === 1) {
        return "false"
    }
    else if (number < 0){
       return isEven(-number)
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-97));



function isodd(number){
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }
    return isEven(number - 2);
}

console.log(isodd(50));
console.log(isodd(75));
console.log(isodd(7));


let stringa = "pippo"

console.log(stringa[stringa.length-1]);



function countBs(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] =="B") {
            count +=1 ; 
        }
    }
return count;
}

console.log(countBs("BBC"));




function countChar(str, char) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == char.toLowerCase()) {
            count +=1;  
        }
    }
return count
}

console.log(countChar("kakkerlak", "k"));




function countChar(str, char, caseSensitive = false) {
    if (!caseSensitive){
        str = str.toLowerCase()
        char = char.toLowerCase()
    }
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count +=1;  
        }
    }
return count
}

console.log(countChar("kakkerlak", "k", true)); //mettendo true diventa case sensitive e con la K maiuscola il risultato sarà zero.