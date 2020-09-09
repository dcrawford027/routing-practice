import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Welcome from './components/Welcome';
import Number from './components/Number'
import Hello from './components/Hello';
import HelloColor from './components/HelloColor';

function App() {
  return (
    <div className="App container pt-10">
      <Router>
        <Welcome path="/home"/>
        <Hello path="/:word"/>
        <Number path="/:num"/>
        <HelloColor path="/:word/:textColor/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;
