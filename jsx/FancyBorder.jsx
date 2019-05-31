/**
 * 有些组件无法提前知晓他们子组件的具体内容。
 * 建议这些组件中使用一个特殊的children  prop来将他们的子组件传递到渲染结果中。
 * **/

function FancyBorder(props) {
    return (
        <div className={'fancyBorder fancyBorder-'+ props.color}>
            {props.children}
        </div>
    )
}


/**
 * 这个fancyBorder的标签中的所有内容都会作为一个children prop 传递给fancyBorde组件中。
 * 因为fancyBorder 将 {props.children}渲染在一个<div>中，被传递的这些子组件最终都会出现在这个输出结果中。
 *
 *
 * 少数情况下，你可能需要在一个组建中预留出几个洞。
 * 这种情况下，可不适用children，而是自行约定：将所需内容传入props，并使用相应的props
 * 
 * **/