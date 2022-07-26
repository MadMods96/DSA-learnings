//leetcode : Remove Element
//https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/

var merge = function(nums1, m, nums2, n) {

    for(let k = 0; k<n; k++){
        nums1.splice(0,0,nums2[k])
        nums1.pop()
    }
    
    nums1 = nums1.sort((a,b) => a-b)

};
