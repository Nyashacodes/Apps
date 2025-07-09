// 231. Power of Two
// Given an integer n, return true if it is a power of two. Otherwise,
// return false.An integer n is a power of two, if there exists an integer x such that n == 2x.
// Math
// Bit Manipulation
// Recursion
// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16

function powerOFTwo(n){
   if(n ==1)return true;
   if(n%2 !== 0 || n<1)return false;
   return powerOFTwo(n/2);
}
// 2^0 = 1
// 2^1 = 2
// 2^2 = 4
// 2^3 = 8
// n = 16, 
// n= n/2=n/2=n/2=n/2
// 16/2=8
// 8/2=4
// 4/2=2
// 2/2=1(if u reaches 1 thn it is power of 2)
// and an odd number cnnot be powof2
// and if it is < 1 that is also not pow of 2
// 6/2=3
// 3/2=1.5
// 1.5/2=0.75 so 6 is not pow of 2


