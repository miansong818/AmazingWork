/* eslint-disable require-jsdoc */
/**
 * Insert number into a binary search tree
 *
*/
// const root = null;

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const insertIntoBST = (root, val)=>{
  if (val>=root.val) {
    if (root.right) {
      insertIntoBST(root.right, val);
    } else {
      root.right = new TreeNode(val);
    }
  } else {
    if (root.left) {
      insertIntoBST(root.left, val);
    } else {
      root.left = new TreeNode(val);
    }
  }
};

// faster way
// const insertIntoBSTWhile = (root, val)=>{
//     node ==root;
//     while(1){
//         if(val>=root.val){
//             if(root.right){
//                 node = node.right;
//                 continue;
//             } else {
//                 root.right = new TreeNode(val);
//                 break;
//             }
//         } else {
//             if(root.left){
//                 node = node.left;
//                 continue;
//             } else {
//                 root.left = new TreeNode(val);
//                 break;
//             }
//         }
//     }
//     return root;
// }

console.log(insertIntoBST([4, 2, 7, 1, 3], 5));
