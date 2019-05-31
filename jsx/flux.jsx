/**
 * 作者说： 痴迷于将代码变得简单。我说的不是代码量变少，而是简单。
 * 因为代码量更少并不一定意味着简单。
 *
 * 复杂度是我们进行抽象的结果。
 *
 *
 *     v=== action  <====
 *    ||                  \\
 *   vvv                  ^^^
 * dispatcher ==>stores ==> views
 *   ^^^
 *   ||
 *    ^=== action
 *
 *  模式的主角是 dispatcher. 担当系统中所有事件的枢纽。他的工作就是接收我们称之为actions(动作)的通知并将其传给所有的stores。
 *  store 决定了是否对传入的动作管兴趣，如果管兴趣则通过改变自己的内部状态/数据来进行响应，改变会触发views的重新渲染。
 *
 *
 *  TODO: 通常，要理解某种技术的最好途径就是去实现它。
 *
 *
 * **/

var Dispatcher = function () {
    return {
        _stores:[],
        register: function (store) {
          if(!store ||!store.update) {
              throw new Error('YOU shoulf provide a  store that han an update method')
          } else {
              this._stores.push({store: store})
          }
        },
        dispatch: function (action) {
            if(this._stores.length > 0) {
                this._stores.forEach(function (entry) {
                    entry.store.update(action)
                })
            }
        },
    }
}


FrameWork.attachToStore(view, store)


//使用mixin
var view = React.createClass({
    mixins: [FrameWork.attachToStore(store)]
})














