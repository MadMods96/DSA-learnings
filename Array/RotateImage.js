// Leetcode : 48. Rotate Image

var rotate = function(matrix) {
    for(let i = 0; i<matrix.length; i++){
        let j = i,k = matrix.length;
        
        while(j < k){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
            j++
        }
    }
    
     for(let i=0;i<matrix.length;i++) {
        matrix[i].reverse();
    }
    
    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
