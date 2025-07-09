let arr = [15,16,8,0, 12,3,2, 14, 14]
let target = 2
function linearSearch(arr, t){
for(let i=0; i<arr.length;i++){
    if(arr[i] === t){
        return i //if target found thn return index
    }
}
return -1 // if target is not present
}

console.log(linearSearch(arr, target))