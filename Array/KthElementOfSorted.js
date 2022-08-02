// Leetcode : 378. Kth Smallest Element in a Sorted Matrix



/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
     let arr = []
    for(let x of matrix){
        arr.push(...x)
    }
    arr.sort((a,b) => a-b);
    return arr[k-1]
};

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]],8))
