new Promise(executor)
/**
 * executor 是带有 resolve 和 reject 两个参数的函数
 * Promise 构造函数执行时，立即调用exector
 *
 * executor ： function (resolve, reject) {
 *    dosomething();
 *    异步执行返回结果，然后
 *    如果调用了resolve() 函数，会把promise对象的状态改为 fulfilled
 *    如果调用了 reject() 函数，会把promise的状态改为rejected。
 *    如果在执行executor 函数中，出现异常，那promise的状态也会改为rejected。
 *
 *
 * }
 *
 *
 * **/