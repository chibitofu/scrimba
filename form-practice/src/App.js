import React from 'react';
import Form from './Form'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App columns">
        <div className="column test">
          <h1>Title</h1>
          <p>Body</p>
        </div>
        <div className="column">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
