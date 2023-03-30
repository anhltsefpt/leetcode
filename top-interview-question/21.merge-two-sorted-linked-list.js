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

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var mergeTwoLists = function(list1, list2) {
    var head = null

    if (list1 === null) {
        return list2
    }

    if (list2 === null) {
        return list1
    }
    
    if (list1.val < list2.val) {
        head = new ListNode(list1.val, null)
        list1 = list1.next
    } else {
        head = new ListNode(list2.val, null)
        list2 = list2.next
    }
    var current = head

    while (list1 !== null || list2 !== null) {
        if (list1 === null) {
            current.next = new ListNode(list2.val, null)
            list2 = list2.next
        } else if (list2 === null) {
            current.next = new ListNode(list1.val, null)
            list1 = list1.next
        } else {
            if (list1.val < list2.val) {
                current.next = new ListNode(list1.val, null)
                list1 = list1.next
            } else {
                current.next = new ListNode(list2.val, null)
                list2 = list2.next
            }
        }
        current = current.next
        console.log(current)
    }
    return head
}

function main () {
    // const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
    // const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
    const list1 = null
    const list2 = new ListNode(0, null)

    // mergeTwoLists(list1, list2)
    function print(list) {
        while (list) {
            console.log(list.val)
            list = list.next
        }
    }

    const res = mergeTwoLists(list1, list2)
    print(res)
}

main()
