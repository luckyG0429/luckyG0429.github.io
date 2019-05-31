// 时间操作符

/**
 * 这里涉及了应用程序中的诸多领域
 * 比如： 同步API的响应， 同时处理其他类型的流，如 UI的点击事件/键盘事件
 *
 * 按固定的时间间隔提供值,函数签名：
 * **/


Rx.Observable.interval([ms])
// 无限生成
Rx.Observable.interval(100)
//所以倾向于和 take() 操作符一起使用。这样可以在调用它之前限制生成值的数量，就像这样：
Rx.Observable.interval(1000).take(3)

//timer 第一个参数是必须的。
let timerStream = Rx.Observable.timer(10000);
timerStream.subscribe(data=> console.log(data));

//指定第二个参数
let moreStr = Rx.Observable.timer(2000,500).take(3);
// 2秒后生成0，然后再500毫秒后生成1，然后再500毫秒生成2
moreStr.subscribe(data=> console.log('timer with args', data))

//delay 简单的延迟每个要发出的值
var start = new Date();
let streams = Rx.Observable.interval(500).take(3);

streams.delay(300).subscribe((x)=>{
    console.log('val',x);
    console.log(new Date()-start);
})


/**
 * 在x毫秒内的忽略事件的能力是非常有用的
 *
 * **/
const btn = document.getElementById('btn');
var s = new Date()

const input$ = Rx.Observable.formEvent(btn, 'click').sampleTime(2000);

input$.subscribe(val=>{
    console.log(val, new Date() - s)
})

//debounceTime
const  inputD =  document.getElementById('inputs');

const example = Rx.Observable.formEvent(inputD, 'keyup')
    .map(i=> i.currentTarget.value)

// 在两次敲击键盘事件之间，有0.5秒的等待时间，如果时间小于0.5秒则丢弃前一个敲击键盘事件
const debouncedInput = example.debounceTime(500);

const subscribe1 = debouncedInput.subscribe(val=> {
    console.log('debounced input', val)
})















