
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