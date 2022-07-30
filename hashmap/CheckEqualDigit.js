//Leetcode : 2283. Check if Number Has Equal Digit Count and Digit Value


/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
   
    let x = new Map();

    for(let i = 0; i < num.length; i++){
        x.set(i,num[i])
    }
    
    for(let j = 0; j<num.length; j++){
        let val = find(j,num)
        if(x.get(j) != val){
            return false;
        }
    }
    
    function find(s,n) {
        let count = 0;
        for(z of n ){
            if(s == z){
                count++;
            }
        }
        return count;
    }
   
    
    
    return true;
};
