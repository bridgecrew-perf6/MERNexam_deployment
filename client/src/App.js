import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router } from '@reach/router';
import DisplayProjs from './Components/allProjs';
import AddProj from './Components/newProj';


function App() {
  return (
    <div className="container my-t-3" >
      <h1>Project Manager</h1>
      <Router >
        <DisplayProjs path="/" />
        <AddProj path="/new"/>
      </Router>
    </div>
  );
}

export default App;

