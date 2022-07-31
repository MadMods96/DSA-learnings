// Leetcode : 1784. Check if Binary String Has at Most One Segment of Ones


/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    
   for(let i = 0; i<s.length; i++){
        if(s[i] == "0"){
         for(let j = i+1; j<s.length; j++){
             if(s[j] == "1") return false
         }
        }
    }
    
    return true;
};
