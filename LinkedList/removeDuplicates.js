//83. Remove Duplicates from Sorted List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;
  let previous;
  let x = [];
  while (current) {
    if (x.includes(current.val)) {
      previous.next = current.next;
    } else {
      x.push(current.val);
      previous = current;
    }
    current = current.next;
  }
  return head;
};
