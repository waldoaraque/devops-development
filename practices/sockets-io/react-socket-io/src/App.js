import React, { Component } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:3080"
    };
  }

  componentDidMount() {
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("From API DarkSky: ", 
      data => this.setState({ response: data }));
  }

  render() {
    const {response} = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {
          response
          ? <p>
              The temperature in Florence is: {response} °F
            </p>
          : <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;