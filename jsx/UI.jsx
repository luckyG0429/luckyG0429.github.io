/**
 * 将组件分为
 * 1. 展示型组件
 * 2. 容器型组件
 *   zu'sh
 *
 *
 *
 * **/


class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            time: this.props.time
        }
    }

    render () {
        const time = this._formatTime(this.state.time)
        return (
            <h1>
                {time.hour} : {time.minutes} : {time.seconds}
            </h1>
        )
    }

    componentDidMount() {
        this._interval = setInterval(this._update, 1000);
    }

    componentWillUnmount () {
        clearInterval(this._interval)
    }

    _formatTime(time){
        //1. 从参数中提取所需信息
        var  [hour, minutes ,seconds ] = [
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
        ].map(num => num < 10? '0' + num : num);
        //2. 又对数据进行格式化
        return {hour,minutes, seconds}
    }

    _update(){
        this.setState({
            time: new Date(this.state.time.getTime() + 1000)
        });
    }

}
