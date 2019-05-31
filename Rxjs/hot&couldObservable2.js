/**
 * 暖的Observable
 *
 *
 *
 * ***/

//热的Observable
let stream = Rx.Observable
    .interval(1000)
    .take(4)
    .publish();

stream.connect()

setTimeout(()=>{
    stream.subscribe(
        data=>console.log('stram value',data)
    )
},2000)



let Obs = Rx.Observable.interval(1000).take(4).publish().refCount();

setTimeout(()=>{
    Obs.subscribe(
        data=> console.log('Obs value 2000', data)
    )
},2000)


setTimeout(()=>{
    Obs.subscribe(
        data=>console.log('Obs value 1100',data)
    )
},1100);












































