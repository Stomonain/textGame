import React from 'react';

import FileBox from '../Elements/FileBox';
import Button from 'react-bootstrap/Button';
import Text from '../Elements/Text';
import store from '../../store';

function FileSelectScreen(props) {
  var styling = {
    visibility: props.screen === 'FileSelectScreen' ? 'visible' : 'hidden'
  }

  return (
    <div className="FileSelectScreen" style={styling}>
      <FileBox  fileNumber={1} left={'33%'} top={'10%'}/>
    </div>
  );
}

export default FileSelectScreen;