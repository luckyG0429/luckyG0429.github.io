/**
 * 单项数据流
 * 它的主要思想是组件不会改变接收的数据。
 *
 * 它们只会监听数据的变化，当数据发生变化时它们会使用接收到的新值，而不是去修改已有的值。
 * 当组件的更新机制触发后，它们只是使用新值进行重新渲染而已。
 *
 * **/
function SwitchBtn (props){
    return (
        <div class="btn">
            <span className={!props.status?'off':'on'}></span>
        </div>
    )
}

class SwitchContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            btnStatus: !1
        }
        this._changeStatus = this.changestatus.bind(this)
    }
    render () {
        return (
            <div onClick={this._changeStatus}>
                <SwitchBtn/>
            </div>
        )
    }
    changestatus(){
        this.setState({btnStatus: !this.state.btnStatus})
    }

}


//开关组件
class LYSwitch extends  React.Component {
    constructor (props) {
        super (props)
        this.state = { flag: false }
        this._onBtnClick = e=>
    }
    render () {
        return (
            <button></button>
        )
    }
}


