/**
 *  由视图组件react 来派发工作。
 *  同一个动作也是由系统的其他部分派发的。
 *
 *
 *
 * */

//TODO action
const CHANGE_VISIBLE = 'CHANGE_VISIBLE'; //使用常量作为动作的类型是最佳实践。
const action = {
    type:CHANGE_VISIBLE,
    visible: false
}

//TODO: STORE
/**
 * reducer 函数，接受当前状态和动作，返回一个新的状态。
 * store 的初始化状态
 * enhancer 提供API 来使用第三方的中间件来扩展redux
 * **/


var store =function () {
    return {
        setState: ()=>{

        },
        getState: ()=>{

        },
        dispatch: ()=>{
        //!!! 最重要的
        },
        subscribe: ()=>{

        }
    }
}

console.log(store)














//连接 React组件， 使用react-redux，将redux 和 react组件
import Header from 'Header'
function render () {

    return (<Header></Header>)
}


//TODO: connect 函数 -  负责订阅store
connect(
    [mapStateToProps], // 接收store的当前状态，并且必须返回一组键值对，这些对象将作为props发送给react组件
    [mapDispatchToProps],//
    [mergeProps],
    [options]
)


























