import React from 'react';
import './App.scss';
import About from './modules/About'
import Contact from './modules/Contact'
import Portfolio from './modules/Portfolio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
