let stream = Rx.Observable.of(1,2,4)
    .reduce((accumulate, current)=>accumulate + current)

// sum() 操作符已不复存在。

let objstream = Rx.Observable.of({name:'a'},{age: 11})
    .reduce((arr,cur)=>Object.assign({},arr,cur))

//以上的操作会把两个对象合成一个对象

//
let streams = Rx.Observable.of(3,6,8)
    .map(x => {return { sum: x, counter: 1}})
    .reduce((a,c)=>{
        return Object.assign({}, a, {sum: a.sum + c.sum, counter: a.counter +1 })
    })
    .map(x => x.sum/ x.counter)

//map, reduce, object.assign()



