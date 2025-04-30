/**
 * Finds the k-th smallest element in a BST (Binary Search Tree).
 * @param {TreeNode | null} root - The root of the BST.
 * @param {number} k - The k-th position to find the smallest element.
 * @returns {number} - The k-th smallest element in the BST.
 */
function kthSmallest(root: TreeNode | null, k: number): number {
    // Decrement k-th position, initially the number of elements to skip
    let elementsToSkip: number = k;
  
    /**
     * In-order traversal of the BST that keeps track of the traversal sequence
     * and searches for the k-th smallest element.
     * @param {TreeNode | null} node - The current node in the traversal.
     * @returns {number} - The value of the k-th smallest element or -1 if not found.
     */
    function inOrderTraversal(node: TreeNode | null): number {
      // Base case: if the current node is null, return -1 to indicate no further nodes in this path
      if (node === null) {
        return -1;
      }
  
      // Recurse on the left subtree
      const leftValue = inOrderTraversal(node.left);
      // If a valid non-negative value is found from the left subtree, return it as the result
      if (leftValue !== -1) {
        return leftValue;
      }
  
      // Decrement elementsToSkip to move towards the k-th smallest element
      elementsToSkip--;
      // If elementsToSkip becomes 0, current node's value is the k-th smallest, return it
      if (elementsToSkip === 0) {
        return node.val;
      }
  
      // Recurse on the right subtree
      return inOrderTraversal(node.right);
    }
  
    // Perform in-order traversal and return value of the k-th smallest element
    return inOrderTraversal(root);
  }
  
  // Note: This algorithm assumes the BST property where for every node, all values in its left subtree
  // are smaller than its value, and all values in the right subtree are greater. The in-order traversal
  // then guarantees that the elements are visited in ascending order.