import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
    this.socket = io('/')
    this.socket.on('message');
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