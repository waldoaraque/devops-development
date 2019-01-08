import React from 'react';
import ReactDOM from 'react-dom';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8080');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
    
  }

  render() {

    return(
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));