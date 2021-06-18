import './ChoiceBox.css';

import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import store from '../../store';

function ChoiceBox(props) {
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
        position: props.position
    }

    const buttonStyling = {
        position: 'relative',
        marginBottom: '0.4em',
        width: '100%'
    }
    var presentedText = '';

    const [myInterval, setMyInterval] = useState(0);


    /*
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
    */


    function createOption(option) {
        return ( 
            <div key={option.text}>
                <Button
                    style={buttonStyling}
                    onClick={() => store.dispatch({type: 'CHOICE_SELECT', decision: option.decision})}
                >
                    {option.text} 
                </Button>
            </ div>
        );
    }

    function buildOptions(options) {
        if(options) {
            return  options.map(createOption);
        }
        return null;
    }



    return (
        <div className="ChoiceBox" style={styling} id={props.id}>
            {buildOptions(props.options)}
        </div>
    )
}

ChoiceBox.defaultProps = {
    width: '10%',
    height: '10%',
    textAlign: 'left',
    position: 'absolute',
    text: "!Missing TextBox!",
    fontSize: 'inherit',
    id: 'MissingId',
    typing: false,
    options: new Array(1),
    
    textSpeed: 20
}


export default ChoiceBox;