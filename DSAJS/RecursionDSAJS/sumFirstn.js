//Write a function to calculate sum of first n natural numbers using recursion -DSA

const sumFirst=(n)=>{
//we will be trying to use recursion here
// 5+(5-1)
// +(4-1)+...
//a no brainer 
// Base case: if n is less than 1, return 0
  if (n < 1) return 0;

// Recursive case: sum of n + sum of (n-1)
  return n + sumFirst(n - 1);
}

console.log(sumFirst(5))



