/* eslint-disable valid-jsdoc */
/** Sum non-negtive number from 1 to n
 * 1st iteration
*/

const sumIteration = (n)=>{
  let result = 0;
  // can use range method with lodash.js _.range()
  // create the range you self
  for (let i=0; i<n+1; ++i) {
    result+=i;
  }


  return result;
};

console.log(sumIteration(4));
/**
 * 2nd math
*/
const sumMath = (n)=>{
  return n * (n+1) / 2;
};


console.log(sumMath(5));
/**
 * 3rd Recursive
*/
const sumRecursion = (n)=>{
  const result = n===0 ? 0 : sumRecursion(n-1)+n;
  return result;
};

console.log(sumRecursion(5));

