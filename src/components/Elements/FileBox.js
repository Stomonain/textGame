import './FileBox.css';

import React, { useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import store from '../../store';

import Text from './Text';

function FileBox(props) {
    let style = {
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left
    }

    const [value, setValue] = useState(0);


    /*
    useEffect(() => {

    }, []);
    */


    return (
        <div className="FileBox" style={style}>
            <div style={{marginLeft: '5%'}}>FileBox</div> 
            <Button
                style={{
                    width: 150,
                    height: 40,
                    position: 'relative'
                }}
                onClick={() => {
                    store.dispatch({type: 'GAME_START'});
                }}
                > Continue
            </Button>
            <Button
                style={{
                    width: 150,
                    height: 40,
                    position: 'relative'
                }}
                onClick={() => {
                    store.dispatch({type: 'SCREEN_CHANGE', file: props.fileNumber, screen: 'CharacterCreationScreen'});
                }}
                > Create
            </Button>
        </div>
    )
}

FileBox.defaultProps = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}


export default FileBox;