function insertionSort(arr, n){
    let current,i,j;
    for(i = 0; i<n; i++){
        current = arr[i];
        j = i-1;
        // this loop will contineaously run till it finds the index where current element should be placed
        while(arr[j]>current && j>=0){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}


console.log(insertionSort([3,4,6,5,2,1], 6));
