/**
 * have arry of i elements and element is the price of day i
 * to find the max profit
 *  input [7,1,5,3,6,4]
 * output 5
 * 
*/

const getMaxProfit= (arr)=>{
    /**
     * edge case: 
     * 1. no element in arr
     * 2. 1st elem is biggest
    */
   let minSoFar = arr[0];
   let maxProfit = 0;
   for(let i = 1; i<arr.length; ++i){
    if(minSoFar < arr[i]){
        minSoFar = arr[i];
    } 
   }
}

const res = getMaxProfit[7,1,5,3,6,4];
console.log(res);