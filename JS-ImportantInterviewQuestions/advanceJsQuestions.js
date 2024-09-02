// Advanced JavaScript coding interview questions

// Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.

function debounce(func, delay = 1000) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, arguments);
      //Using func.apply(this, arguments) ensures that the original function is called with the correct this context and any arguments passed to the debounced function.
    }, delay);
  };
}

function testingFuntion() {
  console.log("testing debouncing");
}

const testDebounceFunction = debounce(testingFuntion);

testDebounceFunction();

// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

function sortArrayOfObj(arr, key){
    return arr.sort((a, b) => a[key] - b[key])
}

function sortArray(arr){
    return arr.sort((a, b) => a - b)
}

console.log(sortArrayOfObj([{num: 1, unm: 2 }, {num: 6, unm: 1 }, {num: 4, unm: 2 }], "num"))

console.log(sortArray([1, 2, 1,5 ,3, 1000, 10 , 100]));

// Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 

function createCopyWithoutReference(data){
    return JSON.parse(JSON.stringify(data));
}

console.log(createCopyWithoutReference([1, 2,3 ,4]))
console.log(createCopyWithoutReference({name: "ps", lname: "singh"}))

function createCopy(data){
    if(Array.isArray(data)){
        return [...data]
    }
    else if (typeof data === "object" && data !== null){
        return {...data}
    }
    else{
        throw new Error("Unsupported data type")
    }
}

let obj1 = {name: "prakash"}
let arr1 = [1, 2,3 , 4]

const obj2 = createCopy(obj1)
const arr2 = createCopy(arr1)

console.log(obj2)
console.log(arr2)

// Write a recursive function to calculate the factorial of a given number. 

function factorialUsingRecursion(num){

    if(num <= 0){
        throw new Error("Enter number 0 or above")
    }

    if(num <= 1){
        return 1;
    }

    // for(let i = 1; i <= num; i++){
    //         result = result * i
    // }

    return num * factorialUsingRecursion(num - 1)

}

console.log(factorialUsingRecursion(5))

// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 

function mergeArrayAndSort(arr1, arr2){
    return [...arr1, ...arr2].sort((a, b) => a - b)
}

console.log(mergeArrayAndSort([1, 4, 2, 45, 2], [5, 2, 3, 1, 8]))

// Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case. 

function checkPallindrome(str){
    let filteredStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().trim();
    console.log(filteredStr)
    for(let i = 0; i < filteredStr.length / 2; i++){
        if(filteredStr[i] !== filteredStr[(filteredStr.length - 1) - i]){
            return false;
        }
    }
    return true

}
console.log(checkPallindrome("    av%i$$$V&&&a  "))

// Create a JavaScript class for a linked list with methods to insert a node at the beginning, end, or at a specific position, and to delete a node from a given position. 

class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null
    }

    insertNodeAtStart(data){
        let node = new Node(data)
        this.head = node
        return this
    }

    insertNodeAtEnd(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node
            return;
        }

        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
        return this
    }

}

let linkedListObj = new singlyLinkedList()

console.log(linkedListObj.insertNodeAtStart(5))
console.log(linkedListObj.insertNodeAtEnd(6))

class arrayMethods{
    constructor(array){
        this.array = array
    }

    printarray(){
        console.log(this.array)
    }

    addElementAtStart(ele){
        this.array.unshift(ele)
        return this.array
    }

    addElementAtEnd(ele){
        this.array.push(ele)
        return this.array
    }

    removeElementFromStart(){
        this.array.shift()
        return this.array
    }

    removeElementFromEnd(){
        this.array.pop()
        return this.array
    }

}

let arrayObj = new arrayMethods([1, 2, 3, 4])

arrayObj.printarray()

console.log(arrayObj.addElementAtStart(5))
console.log(arrayObj.addElementAtEnd(5))
console.log(arrayObj.removeElementFromEnd(5))
console.log(arrayObj.removeElementFromStart(5))

// Implement a function that flattens a nested array in JavaScript, converting it into a single-level array. 

function flattenArray(arr, depth = 1){

    let newArr = []

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i]) && depth > 0){
            newArr = newArr.concat(flattenArray(arr[i], depth - 1))
            // newArr = [...newArr, ...flattenArray(arr[i], depth - 1)]

        }
        else{
            newArr.push(arr[i])
        }
    }

    return newArr;
}

function flatArrayReduce(arr, depth = 1){
    return arr.reduce((acc, val) => {
        if(Array.isArray(val) && depth > 0){
            acc = acc.concat(flatArrayReduce(val, depth - 1))
        }
        else{
           acc.push(val)
        }
        return acc
    }, [])
}

console.log(flattenArray([1, 2, [3, 4,[1, [2]], 5], [2, 4]], 2))
console.log(flatArrayReduce([1, 2, [3, 4,[1, [2]], 5], [2, 4]], 2))

// Write a function that determines if two strings are anagrams of each other  

function checkAnagramShortcut(str1, str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("")
}

console.log(checkAnagramShortcut("rober", "brore"))

function checkAnagramWithoutInbuildMethods(str1, str2){
    if(str1.length !== str2.length){
        return false
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let char of str1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }

    for(let char of str2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }

    for(let char in frequencyCounter1){
        if(frequencyCounter1[char] !== frequencyCounter2[char]){
            return false
        }
    }

    // for(let i = 0; i < str1.length; i++){
    //     if(frequencyCounter1[str1[i]] !== frequencyCounter2[str1[i]]){
    //         return false
    //     }
    // }

    return true
}

console.log(checkAnagramWithoutInbuildMethods("rober", "brore"))

function checkAnagram(str1, str2){
    let arr1 = str1.split('');
    let arr2 = str2.split('');

    let checkValueExists = arr1.every((e) => arr2.includes(e))
    let checkAnagram = checkValueExists && (arr2.length == arr1.length)
    
    return checkAnagram
}

console.log(checkAnagram('bored', 'robed'))

// Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance. 

// With Memoization

function fibonacciMemoization(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    // Recursively calculate and store the next Fibonacci number
    const fibs = fibonacciMemoization(n - 1, memo);
    const nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    memo[n] = fibs.concat([nextFib]);
  
    return memo[n];
  }
  
  function getFibonacciSequence(n) {
    if (n <= 0) return [];
    return fibonacciMemoization(n);
  }
  
  // Example usage
  console.log(getFibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  
  
  //Alternate without memoizaition

function fibonacciSeriesUptoNumber(num){

    if(num === 0) return [0]

    let arr = [0, 1];

    while(true){
        let nextFibNo = arr[arr.length - 1] + arr[arr.length - 2]
        if(nextFibNo > num) break;
        arr.push(nextFibNo)
    }

    return arr
}

console.log(fibonacciSeriesUptoNumber(0))

// create a pollyfill of filter method

Array.prototype.myFilter = function(callback){
    
    let arr = this
    let newArr = []

    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }

    return newArr
}

console.log([1, 2, 3, 4, 5].myFilter((e, i, arr) => {
    console.log(arr, i);
    return e % 2 === 0
}))

// prototype for forEach

Array.prototype.myForEach = function(callback, thisArgs){
    for(let i = 0; i < this.length; i++){
        callback.call(thisArgs, this[i], i, this)
    }
}

let arr = [1, 2, 3, 4, 5]

arr.myForEach((e, i, arr) => {
    console.log(e, i, arr)
})


