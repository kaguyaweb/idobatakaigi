import React, { useState } from 'react';

import SignIn from './SignIn';

export default () => {
  // [状態, 関数]
  const [name, setName] = useState('');
  console.log({ name });
  return <SignIn setName={setName} />;
};
