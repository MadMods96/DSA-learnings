//Leetcode : 706. Design HashMap


var MyHashMap = function() {
    this.obj = {};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.obj[key] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
   if(this.obj[key] !== undefined ){
        return this.obj[key]
    }else{
        
    return -1; 
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if(this.obj[key] !== undefined){
        
    delete this.obj[key]
    }
    else{
        return -1
    }

};
