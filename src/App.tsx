import React from 'react';
import Greeeting from './components/greeting';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">

          <h2>

                Hello world
          </h2>

          <Greeeting msg="Hey"></Greeeting>
        </div>
      </div>
    </div>
  );
}

export default App;
