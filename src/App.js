import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Divider from './components/Divider'
import Shape from './components/Shape'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Shape type="top"/>
        <Divider />
      </header>
    </div>
  );
}

export default App;
