function factorial(n){
    if(n==1) return 1; //because fact(1) == 1, and base condition should stop at 1 not 0
    return n*factorial(n-1)
   
}
// so fact of 5 would be
// 5*4*3*2*1
// n * fact(n-1)
