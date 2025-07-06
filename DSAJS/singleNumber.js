// 136. Single Number
// Attempted
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    let count = 0;
    for(let i = 0; i <nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+ 1)
            count++;
        }else{
            map.set(nums[i], 1)
        }
    }
    console.log(map)
    // return map
    for (let [key, value] of map.entries()){
        if(value === 1){
            return key
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};

    for(let i =0; i<nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }else{
            hash[nums[i]]++;
        }
    }
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]] === 1){
            return nums[i];
        }
    }
};

 //XOr operation/bitwise or
//    a XOR 0 = a;
//    a XOR a = 0;//if i use XOR all the duplicates will be zero, only unique number will be there

// a XOR b XOR b XOR a XOR c = c

//time complexity O(n), no space req here
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   //XOr operation/bitwise or
//    a XOR 0 = a;
//    a XOR a = 0;//if i use XOR all the duplicates will be zero, only unique number will be there

// a XOR b XOR b XOR a XOR c = c
let xor = 0;
for(let i =0; i<nums.length; i++){
    xor = xor ^ nums[i]; 
}
return xor;

};