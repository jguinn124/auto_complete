import React from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from './HideableText.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <div>
			<HideableText text="dynamic text"/>
		</div>
      </header>
    </div>
  );
}

export default App;
