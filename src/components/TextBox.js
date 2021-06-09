import './TextBox.css';

import InnerText from './InnerText';

function TextBox(props) {
    var styling = {
        width: props.width,
        height: props.height,
        marginLeft: props.marginLeft
    }

    return (
        <div className="TextBox" style={styling} >
            {props.text}
        </div>
    )
}

TextBox.defaultProps = {
    width: '30em',
    height: '7em',
    textAlign: 'left',
    position: 'relative',
    marginLeft: '10em',
    text: "!Missing Text!"
}


export default TextBox;