/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/**
 * Given an integer n, generate all the valid combinations of n paris of parentheses
 * e.g: input 3
 * output: ['((()))','(()())','(())()','()(())','()()()']
 * tips: use recursion and back-tracking
*/

const gen_par=(n)=>{
  /**
     * validity condition 1:
     * not trying to pop from an empty stack
     * validity condition 2:
     * stack must be empty at the end
     *
    */
  // logic
  //    const stack = [];
  //    for par in comboination:
  //     if(par =='('){
  //         stack.append(par)
  //     } else {
  //         if stack.length === 0:
  //         return false;
  //         else stack.pop()
  //     }
  //     return stack.length === 0;

  const combs = [];
  recursion(2*n, 0, [], combs);
  return combs;
};


const recursion = (n, diff, comb, combs)=>{
  // T(n) = 2T(n-1)+1 =
  if (diff < 0 || diff>n ) {
    return;
  } else if (n==0) {
    if (diff==0) {
      combs.append(''.join(comb));
    }
  } else {
    comb.append('(');
    recursion(n-1, diff+1, comb, combs);
    comb.pop();
    comb.append(')');
    recursion(n-1, diff-1, comb, combs);
    comb.pop();
  }
};
