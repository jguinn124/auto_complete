import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoCompleteText from './AutoCompleteText.js';
import cities from './cities.js'

function App() {
  return (
    <div className="App">
		<div className="App-Component">
			<div className="App-Component">
      			<AutoCompleteText items={cities} />
			</div>
		</div>
    </div>
  );
}

export default App;
