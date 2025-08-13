// Find The largest element in array

function findLargest(arr){
    if(!arr || arr.length < 2){
        console.log("-1")
    }else{
        for(let i = 0; i<arr.length; i++){
            if(arr[i] > largest){
                largest = arr[i]
            }
        }
        return largest
    }    
}


let arr = [222,66,654];
let largest = -Infinity


let res = findLargest(arr);

console.log(res)