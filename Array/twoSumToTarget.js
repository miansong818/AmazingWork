/**
 * given [2,7,11,15], target 9
 * output: [0, 1] or [1, 0]
*/

const sumUp = (nums, target)=>{
  // create hashmap for traversal
  const hm = {};
  // for(let i=0; i<nums.length; ++i){
  //     let num_i = nums[i]
  //     if(hm[num_i]){
  //         hm[num_i]++;
  //     } else {
  //         hm[num_i] = 1;
  //     }
  // }

  for (let i=0; i<nums.length; ++i) {
    if (nums[i] in hm) {
      return [i, hm[nums[i]]];
    }
    hm[target - nums[i]] = i;
  }
};

const res = sumUp([1, 2, 7, 8, 3, 11, 15], 9);
console.log(res);
