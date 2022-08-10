//Leetcode : 11. Container With Most Water



/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length-1; max = 0;
    
    
    while(i<j){
        let gap = j-i;
        
        let scale = height[height[i] < height[j] ? i++: j--];
        
        max = Math.max(max, gap*scale);
        
    }
    
    return max;
    
};
