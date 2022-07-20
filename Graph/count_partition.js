/**
 * counts the number of ways that you can partition n objects using parts up to m(m>=0)
*/

const getCounts=(n, m)=>{
 // if n or m = 0 . will return 0
 let result = 0;
 if(n===0){
    result = 1
 } else if( n<0 || m===0){
    result = 0
 } else {
    result = getCounts(n-m, m)+getCounts(n, m-1);
    }
 
 return result;
}

console.log(getCounts(4,4))