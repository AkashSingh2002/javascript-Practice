// Write a function that returns the sum of all numbers in an array. 

function sumOfArray(arr){
    return arr.reduce((acc, val) => acc + val, 0)
}

console.log(sumOfArray([1, 2, 3, 4, 5]))

// Implement a function that finds the maximum number in an array. 

function maxInArray(arr){
    return arr.reduce((acc, val) => {
        if(acc < val){
            acc = val
        }
        return acc
    }, 0)
}

console.log(maxInArray([2, 1, 5, 4, 0]))

// Write a function that returns a new array containing only the unique elements from an input array. 

function uniquesElements(arr){
    return [...new Set(arr)]
}

console.log(uniquesElements([1,4,4, 3, 2,  3, 2, 5]))

//alternative

function uniqueElementsLongWay(arr){
    let newArr = []

    arr.forEach((e) => {
        if(!newArr.includes(e)){
            newArr.push(e)
        }
    })

    return newArr
}


console.log(uniqueElementsLongWay([1, 2, 1,4,4, 3, 2,  3, 2, 5]))

// Implement a function that returns the average value of numbers in an array. 

function averageNumberInArray(arr){
    let sum = arr.reduce((acc, val) => acc + val,0)
    return sum / arr.length 
}

console.log(averageNumberInArray([5, 3, 4, 2, 1]))

// Write a function that sorts an array of strings in alphabetical order.

function sortStringInArray(arr){ // we can also sort using sorting techqniques like bubble sort, merge sort...
    return arr.sort()
}

console.log(sortStringInArray(["sfd", "fds", "as", "df", "csaa"]))

// Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1. 

function findIndex(arr, index){

    let indexPosition = -1

    for(let i = 0; i < arr.length; i++){
        if(index === arr[i]){
            indexPosition = i
        }
    }

    return indexPosition

}

console.log(findIndex([1, 2, 3, 2, 1, 5], 3));

function findIndexShortcut(arr, element){
    // let indexPosition = -1

    // // arr.forEach((e) => {
    // //     if(element === e){
    // //         indexPosition = arr.findIndex((y) => y === e)
    // //     }
    // // })

    // return indexPosition

    return arr.findIndex((e) => e === element)
}

console.log(findIndexShortcut([1, 2, 3, 2, 1, 5], 6));

// another shortcut

function findIndexAnotherShortcut(arr, element){
    return arr.indexOf(element)
}

console.log(findIndexShortcut([1, 2, 3, 2, 1, 5], 5));

// Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 

function removeAllFalsyValues(arr){
    return arr.reduce((acc, val) => {
        if(val){
            acc.push(val)
        }
        return acc
    }, [])
}

console.log(removeAllFalsyValues([1, "", null, 0, 2, "prakash", false, NaN]))

// Implement a function that merges two arrays into a single array, alternating elements from each array. 

function mergeArrays(arr1, arr2){
    let mergedArray = [...arr1, ...arr2];

    return mergedArray.reduce((acc, val) => {
        if(!acc.includes(val)){
            acc.push(val)
        }

        return acc
    }, [])

}

console.log(mergeArrays([2, 1, 4], [6, 4, 2]));

// Write a function that finds the second largest number in an array. 

function findSecondLargestNumberInArray(arr){
    let firstLargestNo = arr[0];
    let secondLargestNo = arr[0];

    arr.forEach((e) => {
        if(firstLargestNo < e){
            secondLargestNo = firstLargestNo;
            firstLargestNo = e;
        }
        else if(secondLargestNo < e && firstLargestNo !== e){
            secondLargestNo = e
        }
    })

    return secondLargestNo
}

console.log(findSecondLargestNumberInArray([2, 1, 2, 3, 6, 7]))

// shortcut to do this

function shortcutToFindSecondLargestNo(arr){
    return arr.sort((a, b) => a - b)[arr.length - 2]
}

console.log(shortcutToFindSecondLargestNo([4, 4, 1, 2, 26, 3, 14]));

// Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays. 

function filterConditionBasedOnCondition(arr, condition){
    let arr1 = arr.filter((e) => condition(e));
    let arr2 = arr.filter((e) => !condition(e));

    console.log(arr1, arr2)
}

function condition(e){
    return e % 2 === 0
}

filterConditionBasedOnCondition([1, 5, 3, 2, 8], condition)

function longWayFilterConditionBasedOnCondition(arr, condition){

    let arr1 = [];
    let arr2 = [];

    arr.forEach((e) => {
        if(condition(e)){
            arr1.push(e)
        }
    })

    arr.forEach((e) => {
        if(!condition(e)){
            arr2.push(e)
        }
    })

    console.log(arr1, arr2)
}

longWayFilterConditionBasedOnCondition([1, 5, 3, 2, 8], condition)
