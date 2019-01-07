import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(){
    super();
    this.state = {
      endpoint: 'http://localhost:4001'
    }
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('Change Color', 'Red');
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('Change Color', (color) => {
      document.body.style.backgroundColor = color;
    });

    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={ () => this.send() }> 
          Change Color
        </button>
      </div> 
    );
  }
}

export default App;
