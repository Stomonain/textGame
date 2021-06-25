import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Incrementer.css';

function Incrementer(props) {
    var styling = {
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom,
        width: props.width
    }

    const [value, setValue] = useState(props.defaultValue);
/*
    function incrementValue() {
        setValue(value + 1);
    }

    function decrementValue() {
        setValue(value - 1);
    }
*/
    return(
        <div className='Incrementer' style={styling}>
            <p>{props.label}:</p>
            <Button
                style={{
                    width: 40,
                    height: 40,
                    position: 'relative'
                }}
                onClick={props.decrementValue}
                > -
            </Button>
            <text>{props.value}</text>
            <Button
                style={{
                    width: 40,
                    height: 40,
                    position: 'relative'
                }}
                onClick={props.incrementValue}
                > +
            </Button>
        </div>
    )
}

Incrementer.defaultProps = {
    defaultValue: 5,
}

export default Incrementer;