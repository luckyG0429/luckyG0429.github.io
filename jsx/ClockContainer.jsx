//引入展示型组件

function Clock(props) {
    var [h, m, s] = [props.hours, props.minutes, props.seconds].map(num=>num>9?num:'0'+num)
    return (<h1>{h}:{m}:{s}</h1>)
}


class ClockContainer extends React.Component{
    constructor (props) {
        super(props)
        this.state = {time: props.time}
        this.update = this._updatetime.bind(this)
    }
    render () {
        return <Clock {...this._extract(this.state.time)}></Clock>
    }

    componentDidMount() {
        this._interval = setInterval(this.update, 1000)
    }

    componentWillUnmount () {
        clearInterval(this._interval)
    }

    _extract(time) {

        return {
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds()
        }
    }

    _updatetime() {
        this.setState({
            time: new Date(this.state.time.getTime() + 1000)
        });
    }
}
