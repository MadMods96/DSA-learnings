//Leetcode : 2351. First Letter to Appear Twice


/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
     let sx = new Set();
    
    for(let i = 0; i<s.length; i++){
        
        if(sx.has(s[i])){
            return s[i]
        }
        
        sx.add(s[i])
    }
};
