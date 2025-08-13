// Find The Second Largest element in array

function findSecondLargest(arr){
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i]
        }
        else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest
}

let arr = [2,34,55,64,21];
let largest = -Infinity
let secondLargest = -Infinity

let res = findSecondLargest(arr);

console.log(res)
