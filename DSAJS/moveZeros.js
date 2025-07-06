/*283:leetcode
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]*/


//below is not optimized solution, by using extra space
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let resultarr = [];
    let reszero = [];

    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            resultarr.push(nums[i])
        }else{
            reszero.push(nums[i])
        }
    }
    console.log(resultarr)
    console.log(reszero)
    console.log(resultarr.concat(reszero))
    let rearranged = resultarr.concat(reszero);
for (let i = 0; i < nums.length; i++) {
    nums[i] = rearranged[i];
}

    };
//optimized solution without using extra space (inplace)

//  we will take 2 pointers here, constain the pos where we need to fill he next non zero 
let x = 0;
for (let i = 0; i < array.length; i++) {
    if(array[i] !== 0){ //arr[i] is non zero
        array[x] = array[i]; //shift curr element to positin x
        x++; // move x to the next position
    }
    //once loop ended fill 0 from x to n
    for(let i = x; i<n; i++){

    }
}

//solution
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
let x = 0;

for(let i= 0; i<nums.length; i++){
    if(nums[i] !== 0){
        nums[x] = nums[i];
        x++;
    }
}
for(let i = x; i<nums.length; i++){
    nums[i] = 0;

}

    };