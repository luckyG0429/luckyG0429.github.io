var Store = {
    _flag: false,
    set: function (value) {
        this._flag = value
    },
    get: function (value) {
        return this._flag
    }
}

class Switcher extends Reacts.Component {
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