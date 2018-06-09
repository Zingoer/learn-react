import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Toggle from './Toggle';
import Mailbox from './Mailbox';
import Input from './Input';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mails:[],
      name:''
    }
  }

  onClick = (text) => {
    if(text){
      this.setState({
        mails: this.state.mails.concat([text]),
        name: text
      })
    }
  }

  onChange = (e) => {
    this.setState({
        text: e.target.vale
    });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock name={this.state.name} increment={1}/>
        <Toggle />
        <Input onClick={this.onClick} onChange={this.onChange}/>
        <Mailbox mails={this.state.mails}/>
      </div>
    );
  }
}

export default App;
