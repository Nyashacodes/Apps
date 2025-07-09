// 509. Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
//recursion work backward for f(5)= f(4)+f(3).. and so on f(4)= f(3)+f(2)....like a tree
//                fib(5)
//              /       \
//         fib(4)       fib(3)
//        /     \       /     \
//    fib(3)   fib(2) fib(2)  fib(1)
//    /   \     / \    / \      
// fib(2) fib(1)fib(1)fib(0) fib(1)fib(0) //base case where recussion ends  not fib(2)
//  / \               
// fib(1) fib(0) //base case where recussion ends

function fibonacci(n){
    if(n<=1){return n;}
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(5)) //timecomplexity O(2^n) bad timecomplexity

var fib = function(n,memo = {}) {
    if(n<=0) return 0;
    if(n===1) return 1;
    if(memo[n]) return memo[n]
    memo[n]=fib(n-1,memo)+fib(n-2,memo)
    return memo[n]
};

//iterative approach would be
// by using a for loop, we already know // F(0) = 0, F(1) = 1
// so F(0)+F(1)+F(i), and i will go from 2 to n
// let a = 0, b=1; //first two fibonacci
// let result = a+b;
// if(n <= 0)return 0;
// if(n == 1 || n ==2) return 1;

// for(let i = 2; i<n;i++){
//     let temp = a+b;
//     a=b;
//     b = temp;
//     result += b;
// }

// that's how complete iterative method will look
// function fibonacci(n){
// let a = 0, b=1; //first two fibonacci
// let result = a+b;
// if(n <= 0)return 0;
// if(n == 1 || n ==2) return 1;

// for(let i = 2; i<n;i++){
//     let temp = a+b;
//     a=b;
//     b = temp;
//     result += b;
// }
// return result
// }
// console.log(fibonacci(5))
