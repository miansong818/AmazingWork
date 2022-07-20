
/*
 * Complete the 'createBST' function below.
 *
 * The function accepts INTEGER_ARRAY keys as parameter.
 */
let counter;
let root = null;
class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  // const keysCount = [4, 5, 3, 1];
  
  function createBST(keys) {
    // set the value of counter to 0
    counter = 0;
    // let hasRoot = false;
    // for each key in keys
    for (let i = 0; i<=keys.length-1; i++) {
      if (root) {
        // insert() root and key
        insert(root, keys[i]);
      } else {
        // create new node with value key at the root node of the tree
        root = new Node(keys[i]);
      }
      // print counter
      console.log(counter);
    }
  }
  
  function insert(root, key) {
    counter++;
    // key is less than the value of root node
    if (key < root.val) {
      // root node has no left child
      if (!root.left) {
        // create a new node with value 'key' as the left child of root node
        root.left = new Node(key);
      } else {
        // insert(left child of root node, key)
        insert(root.left, key);
      }
    } else {
      // root node has no right child
      if (!root.right) {
        // create a new node with value 'key' as the right child of root node
        root.right = new Node(key);
      } else {
        // insert(right child of root node, key)
        insert(root.right, key);
      }
    }
  }
  
  
  // const keysCount = [4, 5, 3, 1, 6, 7, 2];
  
  const keys =[4, 5, 3, 1, 6, 7, 2];
  
  // for (let i = 0; i < keysCount; i++) {
  //   const keysItem = parseInt(readLine().trim(), 10);
  //   keys.push(keysItem);
  // }
  
  createBST(keys);