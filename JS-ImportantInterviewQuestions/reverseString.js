
function reverseString(string){
    let reversedString = "";
    let finalString = string.trim()
    for(let i = finalString.length - 1; i >=0; i--){
        reversedString += finalString[i]
    }
    
    return reversedString
}

console.log(reverseString("    prakash             "))



let word = "   prakash    ";
function reverseString(string){
    let reverseArray = [];
    let arrayOfString = string.trim().split("");
    let lengthOfString = arrayOfString.length - 1
    console.log(lengthOfString)
    for(let i = lengthOfString; i>=0; i--){
        reverseArray.push(arrayOfString[i])
    }
    let arrayToString = reverseArray.join("")
    console.log(arrayToString)
}

console.log(word.trim()[5])

reverseString(word)

// using for loop

function reverseString(string){
    let reversedString = "";
    string = string.trim()
    for (let i = string.length-1; i>=0; i--){
        reversedString += string[i];
    }
    return reversedString;
    
}

console.log(reverseString("1234  "))

// ---------------------------------------------------------
// ---------------------------------------------------------

// using while loop

function reverseString(string){
    let reversedString = "";
    string = string.trim();
    let i = string.length - 1;
    while(i >= 0){
        reversedString += string[i]
        i--;
    }
    return reversedString;
}

console.log(reverseString("  1234  "))

// ---------------------------------------------
// ---------------------------------------------

// Reverse string using array 

let word = "  12345  ";
function reverseString(word){
    let reverseArray = [];
    console.log(word)
    word = word.trim().split("");
    let length = word.length - 1;
    for( let i = length ; i>=0; i--){
        reverseArray.push(word[i])
    }
    console.log(reverseArray);
    reverseArray = reverseArray.join("");
    console.log(reverseArray);
    
}

reverseString(word);

// ------------------------------------------------
// ------------------------------------------------

// Reverse array using for loop

function reverseNum(num){
    reversedNum = [];
    let length = num.length - 1;
    for (let i = length; i>=0; i--){
        reversedNum.push(num[i])
    }
    console.log(reversedNum);
}

reverseNum([1,2,3])

// ---------------------------------------------
// ---------------------------------------------

// Reverse Array using while loop

let arr = [1,2,3,4];
function reverseArr(arr){
    let reversedArr = [];
    let length = arr.length - 1;
    while(length >= 0){
        reversedArr.push(arr[length])
        length--
    }
    return reversedArr;
}

console.log(reverseArr(arr))

// ----------------------------------------------
// ----------------------------------------------

// Reverse Number using String Reversal

let num1 = 1234;
let result = num1.toString().split('').reverse().join('');
console.log(result);

// Reverse Number without converting into string

function reverseNum(num1){
    let reversedNum = 0;
    while(num1>0){
        reversedNum = (reversedNum * 10) + (num1 % 10);
        num1 = Math.floor(num1/10);
    }
    return reversedNum;
}
console.log(reverseNum(123));
