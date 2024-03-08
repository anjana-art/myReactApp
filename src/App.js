import React from 'react';
import './App.css';
import Axios from './components/Axios';
import Fetch from './components/Fetch';
import Awaitaxios from './components/Awaitaxios.js';
 

function App() {
  return (
    <div className="App">
    
     <Axios/>
     <Fetch/>
     <Awaitaxios/>
    

    </div>
  );
}

export default App;
