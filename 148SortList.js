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
var sortList = function (head) {
    if (!head) return null;

    const sortedArr = [];
    while (head) {
        sortedArr.push(head);
        head = head.next;
    }


    sortedArr.sort((a, b) => a.val - b.val);
    const l = sortedArr.length;
    for (let i = 0; i < l; i++) {
        sortedArr[i].next = sortedArr[i + 1] || null;
    }
    return sortedArr[0];
};