// 1. Write a JavaScript function to calculate the sum of two numbers.  

function sumOfTwo(a, b){
    return a + b;
}

console.log(sumOfTwo(1, 2))

// 2. Write a JavaScript program to find the maximum number in an array. 

function maximumNumber(arr){

    let maxNumber = arr[0] ;

    for(let i=1; i < arr.length; i++){
        if(maxNumber < arr[i]){
            maxNumber = arr[i]
        }
    }

    return maxNumber;
}

// [1, 2,3 ,4 ,7, 4]

console.log(maximumNumber([1, 2, 66, 40, 90, 4]))

//Inbuilt function

// function maximumNumber(arr) {
//     return Math.max(...arr); // Find the maximum value using Math.max and spread operator
// }

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function palindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase();

    // Loop through the string to check if it's a palindrome
    for (let i = 0; i < str.length / 2; i++) {
        // Compare characters from both ends of the string
        if (str[i] !== str[str.length - 1 - i]) {
            // If characters don't match, it's not a palindrome
            return false;
        }
    }

    // If all characters match, it's a palindrome
    return true;
}

// Alternate

function isPalindrome(str) { 

    return str === str.split("").reverse().join(""); 
  
}

console.log(palindrome("avaa"))
console.log(isPalindrome("aviva"))

// Write a JavaScript program to reverse a given string. 

function reverseString(str){

    let reversedString = "";

    for(let i = 0; i < str.length; i++){
        reversedString += str[str.length - 1 - i]
    }

    return reversedString
}

function shortReverseString(str){
    return str.split("").reverse().join("")
}

console.log(reverseString("prakash"))
console.log(shortReverseString("singh"))

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function evenNumbers(arr){
   return arr.filter((e) => e % 2 === 0)
}

console.log(evenNumbers([1, 2, 3,4, 2, 5, 6]))

// Remove white extra white spaces in between text and leading and trailing spaces

function removeWhiteSpaces(str) {
    if (!str || typeof str !== "string" || str.length === 0) {
        return "";
    }

    // Use a regular expression to replace multiple spaces with a single space
    const newStr = str.replace(/\s+/g, ' ').trim();

    return newStr;
}

console.log(removeWhiteSpaces());

// Write a JavaScript program to calculate the factorial of a given number. 

function factorial(num){
    if(num === 1 || num === 0){
        return 1;
    }
    else{
        return num * factorial(num - 1)
    }
}

console.log(factorialMethod(5))

function factorialMethod(num){

    let outputNumber = 1;

    for(let i = 1; i <= num; i++){
        outputNumber = outputNumber * i
    }
    return outputNumber
}

console.log(factorialMethod(5))

// Write a JavaScript function to check if a given number is prime. 

function isPrime(num) { 

    if (num <= 1) return false; 
  
    for (let i = 2; i <= Math.sqrt(num); i++) { 
  
      if (num % i === 0) return false; 
  
    } 
  
    return true; 
  
  } 

console.log(isPrime(18))

// Write a JavaScript program to find the largest element in a nested array. 




function largestNumberInNestedArray(arr){
    let newArr = arr.flat(Infinity)
    console.log(newArr)
    let maxNumber = 0;
    
    // for(let i = 1; i <= newArr.length; i++){
    //     if(maxNumber <= newArr[i-1]){
    //         maxNumber = newArr[i-1]
    //     }
    // }

    newArr?.forEach((e) => {
        if(maxNumber <= e){
            maxNumber = e
        }
    })
    
    return maxNumber
}

console.log("largestNumberInNestedArray", largestNumberInNestedArray([1, 8, [3, 4, [5, 6, [5, 9]]], 5, 2]))

// Flatten Array function

function flattenArray(arr, depth = 1){
    
    let newArr = []

    for(let i = 1; i <= arr.length; i++){
        if(Array.isArray(arr[i-1]) && depth > 0){
               newArr = newArr.concat(flattenArray(arr[i-1], depth - 1))
        }
        else{
            newArr.push(arr[i-1])
        }
    }
    return newArr
}

// Short method to flat an array using reduce

function flatUsingReduce(arr, depth = 1){
    if(depth < 1){
        return [...arr]
    }

    return arr.reduce((acc, val) => {
        if(Array.isArray(val) && depth > 0){
            acc = acc.concat(flatUsingReduce(val, depth - 1))
        }
        else{
            acc.push(val)
        }
        return acc
    }, [])

}

console.log("flat using reduce", flatUsingReduce([1, 8, [3, 4, [5, 6, [5, 4]]], 5, 2], 1))


console.log(flattenArray([1, 8, [3, 4, [5, 6, [5, 4]]], 5, 2], 2))

// PollyFill to flatten an array

if(!Array.prototype.flatArray){
    Array.prototype.flatArray = function(depth = 1){
        const flattenArray = (arr, depth) => {
            let newArr = [];

            for(let i = 0; i < arr.length; i++){
                if(Array.isArray(arr[i]) && depth > 0){
                    newArr = newArr.concat(flattenArray(arr[i], depth - 1))
                }
                else{
                    newArr.push(arr[i])
                }
            }
            return newArr
        }

        return flattenArray(this, depth)
    }
}

console.log([1, 8, [3, 4, [5, 6, [5, 4]]], [5, 2], 5].flatArray(1))

// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function fibonacciSeries(num){

    if(num < 1){
        return []
    }

    if(num === 1){
        return [0]
    }

    let arr = [0, 1]

    for(let i = 2; i < num; i++){
        arr.push(arr[i-1] + arr[i-2])
    }

    return arr;
}

console.log(fibonacciSeries(3))

// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function capitalizeFirstWord(str){

    let words = str?.split(" ")

    for(let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1) 
    }

    str = words.join(" ")

    return str

}

console.log(capitalizeFirstWord("prakash singh"))