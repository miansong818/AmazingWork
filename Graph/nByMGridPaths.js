/* eslint-disable max-len */
/**
 * write function take two inputs (n, m) as integer
 * output the number of unique paths from the top left to the bottom right corner of n * m grids.
 * Constrains: can only move down or right 1 unit at a time
*/

const getPaths=(n, m)=>{
  // it will be only 1 path if n or m equal to 1
  let gridPaths = 0;
  // logic: total paths = path of (n, m-1) + (n-1, m)
  gridPaths = n===1 || m===1? 1 : getPaths(n, m-1) + getPaths(n-1, m);
  return gridPaths;
};

console.log(getPaths(4, 4));
