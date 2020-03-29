import React from 'react';

import Welcome from './components/pages/Welcome';
import AppRouters from './components/pages/AppRouters';

import {IsLoggIn} from './service/AuthService'


function App() {

  if (IsLoggIn()) 
  {
    return (
      <AppRouters></AppRouters>
    )
  }
  else {

    return (
      <Welcome></Welcome>
  );
}
}

export default App;
