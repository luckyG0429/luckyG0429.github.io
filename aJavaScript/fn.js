/**
 * pow()
 * params
 * X 要求是数字
 * n 要求是整数，且n>=0
 * return
 * 返回的是数字
 * */


function pow(x,n){
    if(n<0)  return false;
    if(n==0) return 1
    return x * pow(x,n-1)
}

