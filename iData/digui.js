function fib(n) {
    if(n == 1){
        return n
    } else{
        return fib(n-1) + '' +  fib(n-2)
    }
}
/**
 * f(1) = 1
 * f(2) = 11
 * f(3) = 112
 * f(5) =1123
 * **/

// console.log(fib(5))


//词法环境的优化-  清楚未被使用的变量以节省内存和执行其他内部技巧。

function sayHi(f,s){
    function getFullName(){
        return  f + " " + s
    }
}

//嵌套函数 -  可访问外部变量。


function makeCounter() {
    let counter = 1;
    return function () {
        return counter++
    }
}

let count = makeCounter();

alert( 'count'+count())
alert('count'+count())
alert('count'+count())

let someCounter =  makeCounter();
alert( 'some '+someCounter())
alert( 'some '+someCounter())

//可以
// count 是独立的.
/**
 * makeCounter()的每次调用都会创建一个拥有独立counter的新词法环境。 所以得到的count是独立的。

 [enviroment]
 在脚本开始时，
 **/




