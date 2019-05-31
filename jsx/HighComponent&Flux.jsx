/**
 * 高阶组件
 * ：
 * 创建一个包装组件并返回原始的输入组件.
 * TODO: 使用好处：
 * 使用高阶组件的话，就有机会来传递属性或给应用附加逻辑
 *
 *
 * 视图应该使用store的getter来说明他需要什么。
 * 这使得store变得相当简单并且不包含任何表现层相关的逻辑
 *
 *
 * **/

function attachToStore(Component, store, consumer) {

}


class MyView extends  React.Component {

}

ProfilePage = connectToStores(MyView, store, (props, store) => ({
    data: store.get('key')
}))

/**
 * 常见用法是 使用store的初始状态 来渲染视图。
 * 这意味着 当库被使用时至少触发所有consumer函数一次。
 * **/

var subscribe = function (consumer, noInit) {
    consumer.push(consumer);
    !noInit? consumer(store): null
}

var createAction = function (type) {
     if(!type) {
         throw new Error('Plase , provide action\'s type')
     } else {
         return function (payload) {
             return dispatcher.dispatch({
                 type: type,
                 payload: payload
             })
         }
     }
}

