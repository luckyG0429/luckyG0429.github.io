/**
 * 由冷及热 - 凯蒂·佩里模式
 * 冷 转 热
 * 将冷的observable 转成热的， publish() 和 connect()
 * ***/

let publisher = Rx.Observable
    .interval(1000)
    .take(5)
    .publish();

publisher.subscribe(
    data=>console.log('first value',data),
    err=>console.log('error',err),
    ()=>console.log('cpmplete')
)


setTimeout(()=>{
    publisher.subscribe(
        data=>console.log('twice value',data);
        err => console.log('twice error', err)
        () => console.log('twice complete')
    )
},50000)


publisher.connect();


































