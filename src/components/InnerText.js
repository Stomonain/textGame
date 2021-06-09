import './InnerText.css';

function InnerText(props) {
    var styling = {
        width: props.width,
        height: props.height,
        marginLeft: props.marginLeft
    }

    return (
        <div className="InnerText" style={styling} >
            {props.text}
        </div>
    )
}

InnerText.defaultProps = {

}


export default InnerText;