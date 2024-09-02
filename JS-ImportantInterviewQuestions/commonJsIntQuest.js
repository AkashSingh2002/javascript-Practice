// Write a function to check if a given string is a palindrome.

function palindromeCheck(str) {
    // Remove all non-alphanumeric characters and convert the string to lowercase
    let finalStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is a palindrome by comparing characters from both ends
    for (let i = 0; i < Math.floor(finalStr.length / 2); i++) {
        if (finalStr[i] !== finalStr[finalStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindromeCheck("aviva"))

// Implement a function to reverse a string without using the built-in reverse() method. 

function reverseString(str) { 

    let reversed = ""; 
  
    for (let i = str.length - 1; i >= 0; i--) { 
  
      reversed += str[i]; 
  
    } 
  
    return reversed; 
  
  } 

function reverseString(str) {
    return str.split("").reduce((acc, val) => {
        return val + acc;
    }, '');
}

console.log(reverseString("prakash"))

// Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

function findMinMax(arr) { 

    let min = Math.min(...arr); 
  
    let max = Math.max(...arr); 
  
    return [min, max]; 
  
  }

function FindSmallestAndLargestNo(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }

    let maxNo = arr[0];
    let minNo = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNo) {
            maxNo = arr[i];
        }
        if (arr[i] < minNo) {
            minNo = arr[i];
        }
    }

    console.log("Max:", maxNo, "Min:", minNo);
}

FindSmallestAndLargestNo([2, 100,3, 5, 3,4, 10 ,9, 7, 1000, 0, 2])

function FindSmallestAndLargestNoShortcut(arr){

    let sortedArray = arr.sort((a, b) => a - b)
    let maxNo = sortedArray[sortedArray.length - 1]
    let minNo = sortedArray[0]

    console.log(maxNo, minNo)

}

FindSmallestAndLargestNoShortcut([2, 100,3, 5, 3,4, 10 ,9, 7, 1000, 0, 2])

// Write a function that takes an array of integers as input and returns a new array with only the unique elements. 

function uniqueArray(arr){
    let newArr = [];

    // arr.forEach((e) => {
    //     if(!newArr.includes(e)){
    //         newArr.push(e)
    //     }
    // })

    for(let i = 1; i < arr.length; i++){

        // if(!newArr.includes(arr[i])){
        //     newArr.push(arr[i])
        // }

        let isUnique = true

        for(let j = 0; j < newArr.length; j++){
            if(newArr[j] === arr[i]){
                isUnique = false
                break;
            }
        }

        if(isUnique){
            newArr.push(arr[i])
        }

    }

    return newArr

}

console.log(uniqueArray([1, 2, 2, 1, 3 ,4]))

// shortcut alternative

function getUniqueElements(arr) { 

    return Array.from(new Set(arr)); 
  
  } 

  console.log(getUniqueElements([1, 2, 2, 1, 3 ,4]))

//   Implement a function to find the factorial of a given number. 

function findFactorial(num){

    if(num < 0) return undefined

    let outputNumber = 1;

    for(let i = 1; i <= num; i++){
        outputNumber *= i;
    }

    return outputNumber;

}

// using recursion

function findFactorialUsingRecursion(num){
    if(num <= 1){
        return 1;
    }

    return num * findFactorialUsingRecursion(num - 1)

}

console.log(findFactorialUsingRecursion(5))

console.log(findFactorial(5))

// Write a function that determines if a given number is prime or not. 

function isPrime(num){
    if(num <= 1){
        return false
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }

    return true

}

console.log(isPrime(2))

// Implement a function to find the sum of all the numbers in an array. 

function sumOfNumbers(arr){

    let outputNumber = 0;

    for(let i = 0; i < arr.length; i++){
        outputNumber += arr[i]
    }

    return outputNumber

}

function sumUsingReduce(arr){
    return arr.reduce((acc, val) => {
        return acc + val
    }, 0)
}

console.log(sumUsingReduce([1, 2, 3, 4, 5]))

console.log(sumOfNumbers([1, 2, 3, 4, 5]))

// Given a string, write a function to count the occurrences of each character in the string. 

function findOccurrenceOfEachWord(str){
    if(str.length < 1){
        return undefined
    }

    const strObj = {}

    const frequency = (str) => {
        strObj[str] = (strObj[str] || 0) + 1
    }

    for(let i = 0; i < str.length; i++){
        frequency(str[i])
    }

    return strObj
}

// preferred alternative

function findOccurrence(str){
    const charObject = {};

    for(let char of str){
        charObject[char] = (charObject[char] || 0) + 1
    }

    return charObject

}

console.log(findOccurrence("singh"))

console.log(findOccurrenceOfEachWord("prakash"))

// Write a function that sorts an array of numbers in ascending order. 

// Note -: Bubble sort is not the efficient way of sorting.

function bubbleSort(arr){
    let lengthOfArray = arr.length
    let swapped;

    do {
        swapped = false;
        for(let i = 1; i < lengthOfArray; i++){
            if(arr[i-1] > arr[i]){
                let temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp
                swapped = true
            }
        }
        lengthOfArray--
    } while (swapped);
    
    return arr

}

console.log(bubbleSort([2, -1, 3, -5, 9]))

function quickSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[arr.length - 1]; // gives last element of array
    let leftArray = [];
    let rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) { // Exclude the pivot itself
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

console.log(quickSort([2, -1, 3, -5, 9]))

// This is the best and efficient method. In merge sort first we will split whole array into single arrays and then merge

function mergeSort(arr){

    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray){
    let sortedArray = [];

    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray.shift())
        }
        else{
            sortedArray.push(rightArray.shift())
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray]
}

console.log(mergeSort([2, -1, 3, -5, 9]))
