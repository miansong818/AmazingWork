/* eslint-disable no-unused-vars */
/**
 * find the longest word can be built
 * @param {string[]} words
 * @return {string}
 *
*/

const longestWord = (words)=>{
  const letters ={};
  const maxLength = 0;
  const maxWord = '';
  // construct tree
  for (let i=0; i<words.length; ++i) {
    const word = words[i];
    let current = letters;
    for (let j=0; j<word.length; ++j) {
      const c = word[j];
      if (!current[c]) {
        current[c] ={};
      }
      current = current[c];
    }
    current['.'] = {};
  }

  // for()
  // not finished
};
