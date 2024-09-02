class customFunction{
    constructor(arr){
        this.arr = arr
    }

    customMap(callback){
        let newArr = [];
        for(let i = 0; i < this.arr.length; i++){
         newArr.push(callback(this.arr[i], i, this.arr))
        }

        return newArr
    }

    customFilter(callback){
        let newArr = [];
        for(let i = 0; i < this.arr.length; i++){
            if(callback(this.arr[i], i, this.arr)){
                newArr.push(this.arr[i])
            }
        }
        return newArr
    }

    customReduce(callback, initval){
        let val = initval;
        for(let i = 0; i < this.arr.length; i++){
            val = callback(this.arr[i], val)
        }
        return val
    }

    customSort(comparator){
        return this.arr.sort((a, b) => comparator(a, b))
    }

    // arr.reduce((acc, val) => {}, [])
}

const customA = new customFunction([1, 2, 3, 4])

customA.customMap((e, i, arr) => {console.log(e / 2 + i, arr)})

console.log(customA.customFilter((e) => e !== 2))

console.log(customA.customReduce((acc, val) => acc + val, 0))

// Comparator for sorting numbers in ascending order
const ascending = (a, b) => a - b;

// Comparator for sorting numbers in descending order
const descending = (a, b) => b - a;

// Comparator for sorting strings alphabetically
const alphabetical = (a, b) => a.localeCompare(b);

// Comparator for sorting objects by a specific key in ascending order
const byKey = (key) => (a, b) => a[key] - b[key];

// Comparator for sorting objects by a specific key in descending order
const byKeyDescending = (key) => (a, b) => b[key] - a[key];

console.log(customA.customSort(ascending))