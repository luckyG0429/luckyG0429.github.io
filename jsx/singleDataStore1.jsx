/**
 * 假设
 * 我们可以通过
 * **/

let Store = {
    _flag: true,
    set(val) {
         this._flag = val
    },
    get() {
        return this._flag
    }
}

class  Switcher extends  React.Component{
    constructor (props) {
        super(props)

    }
}