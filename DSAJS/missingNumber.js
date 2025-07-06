// 268. Missing Number
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

//bruteforce approach worst case would be O(n log n)
/**
 *
 */
// var missingNumber = function(nums) {
// n = nums.length;
// nums = nums.sort((a,b)=>a-b); increasing complexity
// console.log(nums,"before");
// for(let i = 0; i<=n; i++){
//     if(nums[i] === i){
//         continue;
//     }else{
//         return i;
//     }
// }
// };

//another solu would be using formaula for finding sum of n numbers
// sum = n(n+1)/2;
var missingNumber = function(nums) {
n = nums.length;
let totalsum = 0;
totalsum = n*(n+1)/2;
let missingsum = 0;
for(let i = 0; i<n; i++){
   missingsum = missingsum+nums[i];
}
return totalsum-missingsum
};
// timecomplexity: O(n)

