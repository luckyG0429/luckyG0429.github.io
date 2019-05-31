function SelfProp (props) {
    return (
        <div className='SplitProps'>
            <div className='div-left'>
                {props.left}
            </div>
            <div className='div-right'>
                {props.right}
            </div>
        </div>
    )
}

export default SelfProp