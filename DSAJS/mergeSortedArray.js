/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//below solution by using extra space by creating copy of nums1 array
var merge = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0,m);
    let p1=0;
    let p2=0;

    for(let i=0; i<m+n; i++){
        if(p2>=n||(p1<m && nums1Copy[p1]<nums2[p2])){
            nums1[i] = nums1Copy[p1];
            p1++;
        }
        else{
            nums1[i] = nums2[p2];
            p2++;
        }
    }
};
//solution without using extra space
//we will use 2 pointer here also but one from front and another from back of the array 
// n1 = [1,2,3,0,0,0] p1 at 3 
// n2 = [2,5,6] p2 at 6 
// check which is greater and move greater inplace of nums1[length -1], increase p1 and p2 accordingly
// when p2 = -1 break loop
// when p1 = -1 thn copy all n2 elements to nums1
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1= m-1;
    let p2= n-1;

    for(let i= m+n-1; i>=0; i--){
        if(p2<0){
            break;
        }
        if(p1>=0 && nums1[p1] > nums2[p2]){
            nums1[i] =  nums1[p1];
            p1--;
        }else{
            nums1[i] = nums2[p2];
            p2--;
        }
    }
};


