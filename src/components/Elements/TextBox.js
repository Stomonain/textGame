import './TextBox.css';

import React, { useState, useEffect} from 'react';
import store from '../../store';

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
        fontSize: props.fontSize,
        visibility: props.visibility,
        color: props.color,
    }
    var presentedText = '';

    const [myInterval, setMyInterval] = useState(0);


    //used to present the text one letter at a time
    useEffect(() => {
        var i = 0;
        var textBox = document.getElementById(props.id);
        textBox.innerHTML = '';

        if(!props.typing) {
            clearInterval(myInterval);
            textBox.innerHTML = props.text;
        }
        else {
            setMyInterval(setInterval(function() {
                textBox.innerHTML += props.text[i]
                i++
                if (i > props.text.length - 1) {
                    clearInterval(myInterval);
                    store.dispatch({type: 'FINISHED_TYPING'});
                }
            }, props.textSpeed))
        }
    }, [props.text, props.typing]);



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
    text: "!Missing TextBox!",
    fontSize: 'inherit',
    id: 'MissingId',
    typing: false,
    
    textSpeed: 20
}


export default TextBox;