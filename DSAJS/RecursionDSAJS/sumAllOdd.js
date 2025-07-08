//find the sum of all the odd numbers in an array recursively
// 1+3+5+7
arr = [8,1,2,3,4,5,6,7]

function sumOdd(n){
    let isOdd = (arr[n]%2 !== 0); //odd checking
    if(n === 0){ //base condition arr[0]=8 here and iseven
        //will check if isodd true thn add else will add 0
        if(isOdd){return arr[n]}else{return 0;}
    }
    if(isOdd){
        return arr[n]+sumOdd(n-1); //7+sumOdd(6), 5+sumOdd(4)
    }else{
        return 0 + sumOdd(n-1); //0+sumOdd(5)
    }
}


console.log(sumOdd(arr.length-1))


// or

function sumodd2(){
    let isOdd = arr[n]%2 !== 0;
    if(n == 0){
        return isOdd ? arr[n] :0;
    }
    return isOdd ? arr[n]+sumodd2(n-1) : 0+sumodd2(n-1);
}

