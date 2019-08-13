import React from 'react';
import { Route } from 'react-router-dom';
//import Students from './students';
import Navbar from './navbar';
import Home from './home';

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="navbarSpace" />
      <div className="row">
        <div className="col m12">
          <div className="row">
            {/* <div className="col m6">
              {/* <h4>City info:</h4>
              <Route exact path="/" component={Home} /> 
            </div>
            <div className="col m6"> */}
              <h4>City info:</h4>
              <Route exact path="/" component={Home} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;