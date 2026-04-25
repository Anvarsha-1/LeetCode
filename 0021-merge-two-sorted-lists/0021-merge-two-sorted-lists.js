/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 == null && list2 == null) return list1
    if (list1 == null) return list2
    if (list2 == null) return list1

    let resultList = new ListNode(0)
    let dummy = resultList
    let arr = []
    let f = list1
    let s = list2
    while (f && s) {
        if (f.val < s.val) {
            dummy.next = f
            f = f.next
        } else {
            dummy.next = s
            s = s.next
        }
        dummy = dummy.next
    }
    if (f) {
        dummy.next = f
    }
    if (s) {
        dummy.next = s
    }
    return resultList = resultList.next

};