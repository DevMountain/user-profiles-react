import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      message: ''
    }
  }

  componentDidMount() {
    axios.get('/api/stuff')
    .then(res => {
      this.setState({
        message: res.data.message
      })
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.message}


      </div>
    );
  }
}

export default App;
