import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:3080",
      message: 'holi'
    };
  }

  send() {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('emitiendo', this.state.endpoint);
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('message', () => {
      console.log('message completed');
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.send()}> Sen Message to API </button>
      </div>
    );
  }
}

export default App;