// Write a function that reverses the order of words in a sentence without using the built-in reverse() method. 

function reverseString(str){
    return str.split("").reduce((acc, val) => val + acc, "")
}

console.log(reverseString("prakash"))

// Alternative

function reverseStringWithoutArray(str){

    let newStr = ""

    for(let i = 0; i < str.length; i++){
        newStr += str[(str.length - 1) - i]
    }

    return newStr;
}

console.log(reverseStringWithoutArray("prakash"))

// Implement a function that checks if a given string is a palindrome (reads the same forwards and backwards) while ignoring whitespace and punctuation. 

function isPalindrome(str){
    let newStr = str.replace(/[^a-zA-Z0-9]/g).trim().toLowerCase();

    for(let i = 0; i < newStr.length / 2; i++){
        if(newStr[i] !== newStr[(newStr.length - 1) - i]){
            return false
        }
    }

    return true
}

console.log(isPalindrome("haha"))

// shortcut way to do this

function isPalindromeShortcut(str){
    let cleanedString = str.replace(/[^a-zA-Z0-9]/g).trim().toLowerCase()
    
    return cleanedString === cleanedString.split("").reverse().join("")
}

console.log(isPalindrome("nitin"))

// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array. 

function largestDifferenceBetweenAnyNumber(arr){

    let maxNo = arr[0]
    let minNo = arr[0]

    for(let i = 1; i < arr.length; i++){
        if(maxNo < arr[i]){
            maxNo = arr[i]
        }
        if(minNo > arr[i]){
            minNo = arr[i]
        }
    }

    console.log(maxNo, minNo)

    return (maxNo - minNo);
}

console.log(largestDifferenceBetweenAnyNumber([0, 2, 9, 4, 5]))

// Implement a function that removes duplicates from an array, keeping only the unique elements. 

function removeDuplicatesLongWay(arr){
    let newArr = [arr[0]];

    for(let i = 1; i < arr.length - 1; i++){
        let checkExist = true
        for(let j = 0; j < newArr.length; j++){
            if(newArr[j] === arr[i]){
                checkExist = false
                break;
            }
        }

        if(checkExist){
            newArr.push(arr[i])
        }
    }

    return newArr
}

console.log(removeDuplicatesLongWay([1, 1, 2, 2, 3, 4, 3, 5, 5]))

function removeDuplicateFromArray(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(!(newArr.includes(arr[i]))){
            newArr.push(arr[i])
        }
    }

    return newArr

}

console.log(removeDuplicateFromArray([1, 1, 2, 2, 3, 4, 3, 5, 5]))

//shortcut

function removeDuplicatesShortcut(arr){
    return Array.from(new Set(arr))
}

console.log(removeDuplicatesShortcut([1, 1, 2, 2, 3, 4, 3, 5, 5]))

// Write a function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1). 

function returnFactorialText(num){

    let str = ""

    for(let i = 0; i < num; i++){
        str += ((num - i) + " X ")
    }

    // let newStr = str.split("").slice(0, (str.length - 3)).join("")

    let arr = str.split("")
    
    arr.splice(-3, 3) // splice modifies the original array so we need to do this in 3 steps with different variables
    
    let newStr = arr.join("")

    return newStr;
}

console.log(returnFactorialText(50))

// Implement a function that flattens a nested array into a single-dimensional array. 

function flattenNestedArray(arr){

    let finalArr = []

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            finalArr = finalArr.concat(flattenNestedArray(arr[i]));
        }
        else{
            finalArr.push(arr[i])
        }
    }

    return finalArr
}

console.log(flattenNestedArray([1, 2, 3, [2, [3, 4, [5, 6]], 5], 3]))

// flat using reduce and with depth

function flattenNestedArrayUsingReduce(arr, depth = 1){
    return arr.reduce((acc, val) => {
        if(Array.isArray(val) && depth > 0){
            acc = acc.concat(flattenNestedArrayUsingReduce(val, depth - 1))
        }
        else{
            acc.push(val)
        }

        return acc
    }, [])
}

console.log(flattenNestedArrayUsingReduce([1, 2, 3, [2, [3, 4, [5, 6]], 5], 3]))

// Write a function that checks if a given string is an anagram of another string (contains the same characters in a different order). 

function checkAnagram(str1, str2){
    return str1.trim().split("").sort().join("") === str2.trim().split("").sort().join("")
}

console.log(checkAnagram("iavva", "avvai"))

// Implement a function that finds the second smallest element in an array of integers. 

// Shortcut approach

function findSecondSmallestNumber(arr, num){
    return arr.sort((a, b) => a - b)[num - 1]
}

console.log("shortcut 2nd smallest", findSecondSmallestNumber([2, 3, 1, 4, 5], 3)); // Output: 1

// Effective approach

function secondSmallestNumber(arr){

    let firstMin = Infinity;
    let secondMin = Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < firstMin){
            secondMin = firstMin
            firstMin = arr[i]
        }
        else if(arr[i] < secondMin && arr[i] !== firstMin){
            secondMin = arr[i]
        }
    }

    if(secondMin === Infinity){
        throw new Error('There is no second smallest number')
    }

    return secondMin

}

function kthSmallestNumber(arr, k) {
    if (k > arr.length) {
        throw new Error("k cannot be more than array length");
    }
    
    let smallest = Array(k).fill(Infinity);

    console.log("kth array", smallest)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest[k-1]) {
            for (let j = k-1; j >= 0; j--) {
                if (j === 0 || arr[i] > smallest[j-1]) {
                    smallest[j] = arr[i];
                    break;
                } else {
                    smallest[j] = smallest[j-1];
                }
            }
        }
    }

    console.log("smallest", smallest)

    return smallest[k-1];
}

console.log(kthSmallestNumber([2, 3, 1, 4, 5], 3)); // Output: 3
console.log(kthSmallestNumber([2, 3, 1, 4, 5], 1)); // Output: 1
console.log(kthSmallestNumber([2, 3, 1, 4, 5], 2)); // Output: 2


function secondSmallestNumberLessEffective(arr, num = 2){

    if(num > arr.length){
        throw new Error("Number cannot be more than array length")
    }

    let minNo = arr[0]

    for(let i = 0; i < num; i++){
        minNo = arr[0]
        arr.forEach((e) => {
            if(minNo > e){
                minNo = e
            }
        })
    
        arr.splice(arr.findIndex((e) => e === minNo), 1)
    }


    return minNo
}

console.log(secondSmallestNumber([2, 3, 1, 4, 5], 3))

// Write a function that generates a random alphanumeric string of a given length. 

function randomAlphaNumericString(num = 1){
    let alphabets = ["a", "b", "c", "d", "e", 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let randomString = "";

    // alphabets.forEach((e) => {
    //     randomString += alphabets[Math.floor(Math.random() * 10)]
    // })

    // for string length of user input
    
    for(let i = 0; i < num; i++){
        randomString += alphabets[Math.floor(Math.random() * 10)]
    }

    return randomString

}

// another approach

function generateRandomString(length) { 

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
    
    let result = ''; 
  
    for (let i = 0; i < length; i++) { 
  
      const randomIndex = Math.floor(Math.random() * characters.length); 
  
      result += characters.charAt(randomIndex); 
  
    } 
  
    return result; 
  
  } 

console.log(randomAlphaNumericString(5));

// Implement a function that converts a number to its Roman numeral representation.

// Need to mug up

function intToRoman(num) {
    // Define mappings of Roman numerals to decimal values
    const val = [
        1000, 900, 500, 400, 
        100, 90, 50, 40, 
        10, 9, 5, 4, 
        1
    ];
    
    const syms = [
        "M", "CM", "D", "CD", 
        "C", "XC", "L", "XL", 
        "X", "IX", "V", "IV", 
        "I"
    ];
    
    let roman = "";
    
    // Loop over the values and symbols
    for (let i = 0; i < val.length; i++) {
        // While the current value can be subtracted from num
        while (num >= val[i]) {
            // Append the corresponding symbol to the result
            roman += syms[i];
            // Subtract the current value from num
            num -= val[i];
        }
    }
    
    return roman;
}

// Example usage:
console.log(intToRoman(1994)); // Output: "MCMXCIV"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(9));    // Output: "IX"
console.log(intToRoman(4));    // Output: "IV"
console.log(intToRoman(1));    // Output: "I"
