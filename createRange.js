/**
 * recreate range function
 * e.g. for i in range(0,5)
 * will get [0,1,2,3,4]
*/

const myRange=(start, end)=>{
    let res = [];
    if(end - start<0) return false;
    for (let i=start; i<=end; i++){
        res.push(i);
    }
    return res;
}

console.log(myRange(1, 5));

//use recursion
const rangeRecursion=(start, end)=>{
    if(start === end) return [start];
    return [start, ...rangeRecursion(start + 1, end)];
}

console.log(rangeRecursion(1, 5));

// use generator
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
//recursive
// function* range(start, end) {
//     yield start;
//     if (start === end) return;
//     yield* range(start + 1, end);
// }

// for (i of range(1, 5)) {
//     console.log(i);
// }
/* Output
 * 1 2 3 4 5 */

const res = [...range(1, 5)] 

console.log(res);

/**
 * using array map
 * Array.from(arrayLike, mapFn)
 * */
const rangeMap = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}

console.log(rangeMap(1, 5));