/**
 * Store 对象是一个单例
 * 提供辅助函数  set 和 get
 *
 * **/

var Store = {
    _handlers: [],
    _flag: '',
    // 订阅数据的变化逻辑
    subscribe: function(handler) {
        this._handlers.push(handler)
    },
    set(val) {
        this._flag = val
    //   新增操作
        this._handlers.forEach(handler=>handler(val))
    },
    get(val) {
        return this._flag
    }

}

//将store和app组件联系起来，每次store中的值产生变化时，都将重新渲染组件

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {value: Store.get()}
        Store.subscribe(value => this.setState({value}))
    }

    render () {
        return (
            <div>
                <Switcher  value = {this.state.value}
                           onChange = {Store.set.bind(Store)}></Switcher>
            </div>
        )
    }
}

class Switcher extends React.Component {
    constructor (props) {
        super(props)
        this.state = {flag: false};
        this._onBtnClick = e => {
            this.setState({flag: !this.state.flag}, ()=>{
                this.props.onChange(this.state.flag)
            })
        }
    }

    render () {
        return (
            <button onClick={this._onBtnClick}>
                {this.state.flag? 'on':'off'}
            </button>
        )
    }
}

function App () {
    return <Switcher onChange={Store.set.bind(Store)}/>
}