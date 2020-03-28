import React from 'react';

import axios from 'axios'
import Welcome from './components/pages/Welcome';
import AppRouters from './components/pages/AppRouters';

import {IsLoggIn} from './service/AuthService'


function App() {

  console.log(IsLoggIn());

  if (IsLoggIn()) 
  {
    axios.get("http://localhost:5002/categories")
    .then((res)=> {
      console.log(res.data);
    })
    .catch((err)=> {
      console.log(err);
    })
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
