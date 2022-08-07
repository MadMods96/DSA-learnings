//Leetcode : 2363. Merge Similar Items

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(a1, b1) {
    let main = [...a1,...b1] //here we are copying the both array into one
    //we will iterate within a single array 
    for(let i = 0; i<main.length; i++){
        for(let j = i+1; j<main.length; j++){//it will start from i+1 so we can actually protect it to take its own index.
           if(main[i][0] === main[j][0]){
                main[i][1] = main[i][1] + main[j][1]
                main[j] = ["out","out"];//temporary set to verify if this array should be ignored or not.
            }
        }
    }
    return main.filter((m,i) => m.length == 2 && m[0] !== "out").sort((a,b) => a[0]-b[0])
};
