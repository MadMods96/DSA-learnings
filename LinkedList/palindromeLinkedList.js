// 234. Palindrome Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let temp = []
    while(head){
        temp.push(head.val);
        head = head.next;
    }
    let i = 0;
    let j = temp.length-1;
    while(i<j){
        if(temp[i] == temp[j]){
            i++;
            j--;
        }
        else if(i==j){
            break;
        }
        else{
            return false
        }
    }
    return true;
};
