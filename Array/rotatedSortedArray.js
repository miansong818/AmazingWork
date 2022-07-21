/**
 * Rotated Sorted Array
 * [5,6,7,0,1,2,3,4]
 * find the minial number
*/

const rotatedSortedArray= (arr)=>{
  let lo =0;
  let hi = arr.length-1;
  while (lo<hi) {
    const guess = parseInt((hi+lo)/2);
    if (arr[guess]>arr[hi]) {
      lo = guess;
    } else {
      hi = guess-1;
    }
  }
  return arr[lo];
};

const arr = [5, 6, 7, 0, 1, 2, 3, 4];

console.log(rotatedSortedArray(arr));
