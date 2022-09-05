import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json';

export default () => {
  // [状態, 関数]
  const [name, setName] = useState('');

  if(config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  } else  {
    return <Main name={name} />;
  } 
};
