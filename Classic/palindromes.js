/* eslint-disable guard-for-in */
/* eslint-disable max-len */
/**
 * Return the length of given string will not exceed 1010.
 * For example:
 * input "abccccdd"
 * longest palindrome can be "dccaccd"
 *
*/

const longestPalindrome = (s) =>{
  const letters = {};
  // create hash map
  for (let i=0; i<s.length; ++i) {
    const si = s[i];
    if (letters[si]) {
      letters[si]++;
    } else {
      letters[si]=1;
    }
  }


  // print hashmap
  // var keys = Object.keys(letters);
  // console.log("keys is :" +keys);
  // keys.forEach(key=>{
  // console.log(key + '|' + letters[key]);
  // });
  // scan the hashmap for pairs
  let totalPairs= 0;
  let hasOdd = false;
  for (const l in letters) {
    // console.log(l);
    const c = letters[l];
    // The Math.floor() function returns the largest integer less than or equal to a given number.
    const pairs = Math.floor(c/2);
    if (!hasOdd && c-pairs*2>=1) {
      hasOdd = true;
    }
    totalPairs +=pairs;
  }
  return totalPairs * 2 + (hasOdd?1:0);
};

const str = 'aassddddc'; // 9
// const str = 'aassddddcf' 9
// const str = 'aassddddcff' 11
const res = longestPalindrome(str);
console.log(res);
