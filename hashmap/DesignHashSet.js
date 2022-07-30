//Leetcode : 705. Design HashSet



var MyHashSet = function() {
    this.map = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    
    this.map.push(key)
  
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  this.map = this.map.filter((m) => {
        return m !== key
    })
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.map.includes(key)
};

