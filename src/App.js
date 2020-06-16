import React from 'react';
import logo from './logo.svg';
import NewComponent from './NewComponent';

function App() {
  return (
    <div className="App">
      <header className="border-b font-bold">
        <NewComponent name="Hello guys!!!"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
