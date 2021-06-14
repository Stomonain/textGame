import './Text.css';

function Text(props) {
    var styling = {
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,
        fontSize: props.fontSize
    }

    return (
        <div className='Text' style={styling}>
            {props.text}
        </div>
    )
}

Text.defaultProps = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    text: "!Missing Text!",
    fontSize: 'inherit',
}

export default Text;