//practing bubble sort

function sortArr(arr){
    for(let j = 0; j<arr.length; j++){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            let swap = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = swap;
        }
    }
    }
    return arr;
}

console.log(sortArr([2,4,3,9,8,4,5,6]))
