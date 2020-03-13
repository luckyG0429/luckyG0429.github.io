let target = {};
let  P = new Proxy(target, {}) // 空的handler 对象


/**
 * 对象的大多数操作，js规范中都有所谓的"内部方法”，描述了最底层的工作方式。
 * [[Get]][[Set]]
 *
 * Proxy 陷阱会拦截这些方法的调用
 * **/

let per = {
    name: 'LIU',
    both: 1993,

}

 per = new Proxy(per, {
    get(t, prop){
        if(t.hasOwnProperty(prop)){
            return '100'
        }else{
            return '1'
        }
    }
})

console.log(per.age)

let arr = [1,222,33]

arr = new Proxy(arr, {
    set(target, prop, val){
        if(typeof val == 'number') {
            target[prop] = val
            return true
        }else{
            return false
        }
    }
})

arr.push(999)
// arr.push('test');

console.log(arr)

// in操作运算符 对应的是  proxy内的 has 陷阱
let rang = {
    start:0,
    end: 10
}

rang = new Proxy(rang, {
    has(target, prop){
        return target.start <= prop && target.end >= prop
    }
})

console.log(-1 in rang)
console.log(10 in rang)

function slow(x) {
    console.log('CPU消耗较大')
    return x
}

//用装饰者模式
function cachingDecorate(func) {
    let cache = new Map();

    return function(x){
        if(cache.has(x)) {
            return cache.get(x)
        }
        let  result = func(x);

        cache.set(x, result);
        return result
    }
}

slow = cachingDecorate(slow);

console.log(slow(1))

console.log(slow(2))

console.log(slow(1))