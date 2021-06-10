import './TextBox.css';

import React, {useEffect} from 'react';

function TextBox(props) {
    var styling = {
        minWidth: props.width,
        minHeight: props.height,
        maxWidth: props.width,
        maxHeight: props.height,
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,
        fontSize: props.fontSize
    }
    var presentedText = '';


    //most used to present the text one letter at a time
    useEffect(() => {
        var i = 0;
        document.getElementById(props.id).innerHTML = '';

        //display text one letter at a time
        var interval = setInterval(function() {
            
            document.getElementById(props.id).innerHTML += props.text[i]
            i++
            if (i > props.text.length - 1) {
                clearInterval(interval);
            }
        }, props.textSpeed)
    })

    return (
        <div className="TextBox" style={styling} id={props.id}>
            {presentedText}
        </div>
    )
}

TextBox.defaultProps = {
    width: '10%',
    height: '10%',
    textAlign: 'left',
    position: 'relative',
    text: "!Missing Text!",
    fontSize: 'inherit',
    
    textSpeed: 20
}


export default TextBox;