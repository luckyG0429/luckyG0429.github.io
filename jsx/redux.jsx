/**
 *  redux 状态容器
 *  负责管理应用的数据流
 *
 *  使用像 CHANGE_VISIBILITY 这样的常量作为动作的类型是一种最佳实践。
 * **/

const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';

const  action = {
    type: CHANGE_VISIBILITY,
    visibility: true //元数据
}

//action creater
const changeVisibility = visibility =>({
    type: CHANGE_VISIBILITY,
    visibility
})

/** getState  dispatch  subscribe  replaceReducer **/

import { createStore } from 'redux';
createStore([reducer], [initial state], enhancer)

