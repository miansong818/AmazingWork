/* eslint-disable no-unused-vars */
/**
 * input is sorted array of integers [2,4,5,5,5,5,6,7]
 * target = 5
 * output: [2, 5]
 * if not exists, return -1
*/

const fn=(arr)=>{
  /**
     * start traversing from the start to the end in the array
     * T(n) = O(n)
     * S(n) = O(1), bec using in loop
     * for( i in range arr):
     *  if arr[i] == target:
     *      start = i
     *      while(i+1<arr.length && arr[i+1]==target){
     *          i+=1
     *          return [start, i]
     *      }
     *      return [-1, -1]
     *
     */

  /**
     * Solution2: use B-tree
     *  T(n) = 2 * O(logn) = O(logn) (use b-tree twice)
     *  S(n) = O(1)
     *
     * * find the start
     * //start from begining
     * findStart=(arr,target)={
     * if arr[0] == target return 0
     * left, right = 0; len(arr)-1
     *
     * while left<=right:
     *  mid = (left+right)/2
     *  if arr[mid] == target and arr[mid-1]<target
     *      return mid;
     *  elseif arr[mid] < target
     *      left = mid + 1
     *  else right = mid -1
     *
     * return -1
     * }
     *
     * find the end
     * end with the last element
     * findEnd=(arr,target)={
     *  if arr[-1] == target return len(arr)-1
     *  left, right = 0; len(arr)-1
     *  while left<=right:
     *      mid = (left+right)/2
     *      if arr[mid] == target and arr[mid+1]>target
     *          return mid;
     *      elseif arr[mid] > target
     *          right = mid -1
     *      else left = mid +1
     *
     *  return -1
     * }
     *
     * find the start
     *
     * final function:
     * if len(arr)==0 or arr[0]> target or arr[-1]< target: return [-1, -1]
     *
     * start = findStart()
     * end = findEnd()
     * return [start, end]
    */
};
