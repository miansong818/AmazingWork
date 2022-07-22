/**
 * Given an array of integers arr and an integer k, find the kth largest element in the arr
 * 1<=k<= \arr\
 * 
 * input [4, 2,9,8,6,5]
 * k = 4
 * 1st largest is: 9
 * 2nd largest is: 8
 * 3rd largest is: 6
 * 4th largest is: 5
*/

const findKthLargest = ()=>{
    /*
    * Solution1: remove the max value every time til the kth (a little slow)
    *  T(n) = (k-1) * 2n + n = O(kn)
    *  S(n,k) = O(1)
    * 
    * for i in range(k-1):
    *   arr.remove(max(arr))
    * return max(arr)
    * 
    */

    /**
     * Solution2: sort the arr and the last one will be the largest, take the len(arr)-k position
     *  T(n) = O(nlogn)
     * 
     * n = len(arr)
     * arr.srot()
     * return arr[n-k]
     * 
     */

    /**
     * Solution3: use the logic with pripority queue
     *  T(n, k) = 2n + (k-1)*logn +logn = O(n+klogn)
     *  arr = [-elem for elem in arr]
     *  heapq.heapify(arr)
     * for i in range (k-1):
     *      heapq.heappop(arr)
     * return -heapq.heappop(arr)
     * 
     */
}