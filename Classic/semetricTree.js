/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/**
 * rules for symmetric trees
 * 1. root is the same
 * 2. left nodes are the same of right nodes of the other tree
 * 3. right nodes are the same of the left nodes of the other tree
 *
 * using DFS (depth first search) for resloving this issue
*/

// check two trees or check two nodes under the root
const are_symmetric=(root1, root2)=>{
  /**
     * T(n) = O(n)
     * S(n) = O(logn)
     * if root1 is none and root2 is none
     *      return true
     * elseif((root1 is none)!=(root2 is none) || root1.val !=root2.val)
     *      return false
     * else:
     *      return are_symmetric(roo1.left, roo2.right) && are_symmetric(roo1.right, roo2.left)
     *
     * */

};

const is_symmetric=(root)=>{
  /**
     * if root is none
     *      return true
     * return are_symmetric(root.left, root.right)
     * */
};
