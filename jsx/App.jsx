/**
 *
 * 受控输入 -
 *  使用单一数据源： App组件的状态。
 *  通过onchange事件，更改state中的对应值
 *
 * **/



class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            value: 'hello'
        }
        this._change = this.handleValue.bind(this)
    }

    handleValue(e){
        this.setState({value: e.target.value})
    }

    render () {
        return (
            <div>
                <input type='text'
                       value={this.state.value}
                       onChange={this._change}
                />
            </div>
        )
    }
}

/**
 * 非受控输入
 * 1.defaultValue + Refs 获取DOM元素的实际引用
 *
 * ref 属性 接受字符串或回调函数
 * TODO: 大量使用refs 并不是好主意。如果你的应用 中出现了这种情况，请考虑以下使用受控输入并重新审视组件。
 * **/


class Apppp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: 'my name'
        }
        this._change = this._handleChange.bind(this)
    }

    _handleChange () {
        this.setState({value: this.input.value})
    }

    render() {
        return (
            <div>
                <input type='text'
                       ref={ input => this.input = input}
                       defaultValue={this.state.value}
                       onchange={this._change}
                />
            </div>
        )
    }

}