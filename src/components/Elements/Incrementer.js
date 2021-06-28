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
    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        if(initialRender) {
            setInitialRender(false);
        }
        else{
            props.passFunction(value);
        }
    }, [value]);

    return(
        <div className='Incrementer' style={styling}>
            <p>{props.label}:</p>
            <Button
                style={{
                    width: 40,
                    height: 40,
                    position: 'relative'
                }}
                onClick={() => {
                    setValue(value - 1);
                    //props.passFunction(value);
                }}
                > -
            </Button>
            <text>{value}</text>
            <Button
                style={{
                    width: 40,
                    height: 40,
                    position: 'relative'
                }}
                onClick={() => {
                    setValue(value + 1);
                    //props.passFunction(value);
                }}
                > +
            </Button>
        </div>
    )
}

Incrementer.defaultProps = {
    defaultValue: 5,
}

export default Incrementer;