//sum of all numbers in array using recursion 
//[4,8,9,1,12]       <--34
//4+sum[8,9,1,12]     <--30+4
//    8+sum[9,1,12]   <--8+22
//       9+sum[1,12]  <--9+13
//          1+sum[12] <--1+12
//              12   
// rec(arr[i]+(arr-arr[i]))//wrong
// sum(n) = n+sum(n-1)
//sum(n) = arr[n] +sum(n-1)
let arr = [4,8,9,1,12];

function sum(n){
    if(n==0) return ar[0];
    return arr[n]+sum(n-1);
}
console.log(sum(arr.length-1))

const recSum = (arr) => {
    console.log(arr)
  if (arr.length === 0) return 0;
  return arr[0] + recSum(arr.slice(1));
};

console.log(recSum([4, 8, 9, 1, 12])); 

// sum = 0;
// sum = sum +arr[i]
// let i =0;
// rec(arr, i){
//     if(i>arr.length){return 0;}
//     [1,2,3,4,5], 0
//     i = rec(arr, i+1)

// }

// let sum = 0;
// for(let i = 0; i <arr.length; i++){
//     sum = sum+ arr[i];
// }
// rec(arr, i=0)
// if(arr.length <= 0){return 0;} //base caase
// sum = rec(arr[i-1]) //main iteration
// it took me so long

const rec = (arr, i = 0) => {
  if (i >= arr.length) return 0;        // base case
  return arr[i] + rec(arr, i + 1);      // recursive step
}

console.log(rec([4, 8, 9, 1, 12]));     // Output: 34

