function reverseString(str){
    if(typeof str !== 'string'){
        return "This is not a string"
    }

    return str.split("").reverse().join("");
}

console.log(reverseString("prakash"));

function reverString(str){

    let strFinal = ""

    for(let i = 1; i <= str.length; i++){
        strFinal += str[str.length - i] 
    }

    return strFinal;
}

function reducereverse(str){
    return str.split("").reduce((acc, val) => {
        return val + acc
    }, '')
}

function flatArray(arr){
    return arr.reduce((acc, val) => {
        if(Array.isArray(val)){
            acc = acc.concat(flatArray(val))
        }
        else{
            acc.push(val)
        }

        return acc
    }, [])
}

console.log(reducereverse("singh"));

let obj1 = {
    as: "Asdf",
    ps: "SDf"
}

obj1.as = "singh"

console.log("1st time change", obj1);

// Object.freeze(obj1);

Object.defineProperty(obj1, "as", {
    writable: false,
    configurable: false
});

obj1.as = "prakash";

console.log("2nd time change", obj1);


console.log(flatArray([1, 2, 2, [1, 2, [3, 2, 1]], 5]))

function maxNumber(arr){
    let minNumber = arr[0];
    let maxNumber = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(minNumber > arr[i]){
            minNumber = arr[i];
        }

        if(maxNumber < arr[i]){
            maxNumber = arr[i];
        }
    }

    return "minimum is " + minNumber + " maximum is " + maxNumber
}

console.log(maxNumber([1, 5, 2, 3]));

// --------------------------------------------
// --------------------------------------------

// reverse number using redice method

function reduceReverse(num){
    let digits = Array.from(String(num), Number);
    let reversedArray = digits.reduce((acc, digit) => {
        return [digit, ...acc]
    },[]);
    return parseInt(reversedArray.join(''));
}

console.log(reduceReverse(123456789))
