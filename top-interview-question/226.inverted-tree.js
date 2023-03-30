/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var invertTree = function(root) {
    if (root === null) {
        return null
    }
    if ((root.left === null) && (root.right === null)) {
        return root
    }
    const left = invertTree(root.right)
    const right = invertTree(root.left)
    return new TreeNode(root.val, left, right)
}

function main () {

    // [4,2,7,1,3,6,9]
    const root = new TreeNode(4,
        new TreeNode(2,
            new TreeNode(1, null),
            new TreeNode(3, null)),
        new TreeNode(7,
            new TreeNode(6, null),
            new TreeNode(9, null)))
    const result = invertTree(root)

    console.log(result)

    // function printTree(tree) {
    //     printTree(tree.left)
    //     printTree(tree.right)
    // }

    // printTree(result)
}

main()