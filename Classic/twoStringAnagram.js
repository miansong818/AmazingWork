/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/**
 * check if two strings are anagram
 * e.g: danger, garden
*/

const anagramFn=(s1, s2)=>{
  // best traversy is using hashtable, solution will be like below:
  // Time complexcity: O(n)
  // Space complexcity: S(n)=O(n)
  // Solution 1:
  // input like nameless, salesman
  // if(s1.length!=s2.length){
  //     return false;
  // }
  // create hash-table for two input
  // freq1 = {}
  // freq2 = {}
  // for ch in s1:
  //     freq1[ch]+=1
  //     else:
  //     freq1[ch]=1

  // for key in freq1: if key not in freq2 or freq1[key] != freq2[key]: return false
  // otherwise return true

  // Solution 2:
  // if(s1.length!=s2.length){
  //     return false;
  // }
  // use counter method check if each charactor has the same counts
  // return Counter(s1)== Counter(s2)

  // Solution 3:
  // sort the string and check if they are the same,
  // Time complexcity: O(nlogn)
  // Space complexcity: S(n)=O(n)

  // if(s1.length!=s2.length){
  //     return false;
  // }
  // return Sorted(s1)== Sorted(s2)
};

// const collect = require('collect.js');

// const num = ['d', 'a','n','g','e','r'];
// const data = collect(num);

// console.log('collect is:', {data});
// const total = data.count();

// console.log('Total number of elements are:', {total});
