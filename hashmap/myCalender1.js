//Leetcode : 729. My Calendar I


var MyCalendar = function() {
    this.map = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(let x of this.map){
        if(end > x[0] && start < x[1]){
            return false;
        }
    }
    this.map.push([start,end])
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

