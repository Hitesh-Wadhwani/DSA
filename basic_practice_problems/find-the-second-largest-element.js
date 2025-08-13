// Find The Second Largest element in array

function findSecondLargest(arr){
    if(!arr || arr.length === 0){
        return "-1"
    }
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

let arr = [3,5,6];

let largest = -Infinity

let secondLargest = -Infinity

let res = findSecondLargest(arr);
console.log(res)
