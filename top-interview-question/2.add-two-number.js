/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const addTwoNumbers = function(l1, l2) {
    let item = l1
    let first = []
    let second = []
    while (item !== null) {
        first = [item.val, ...first]
        item = item.next
    }

    item = l2
    while (item !== null) {
        second = [item.val, ...second]
        item = item.next
    }

    let res = []
    let add = 0
    console.log(first, second)
    for (let i = 0; i < Math.max(first.length, second.length); i++) {
        const item1 = first[i] || 0
        const item2 = second[i] || 0
        res = [(item1 + item2 + add) % 10, ...res]
        add = Math.floor((item1 + item2) / 10)
    }
}

function main () {
    const l1_3 = new ListNode(3, null)
    const l1_2 = new ListNode(4, l1_3)
    const l1_1 = new ListNode(2, l1_2)
    

    const l2_3 = new ListNode(4, null)
    const l2_2 = new ListNode(6, l2_3)
    const l2_1 = new ListNode(6, l2_2)

    addTwoNumbers(l1_1, l2_1)
}

main()