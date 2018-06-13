import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from './Title';
import Button from './Button';
import Count from './Count';
import './App.css';

class App extends Component {

  handleAddClick = () => {
    this.props.dispatch({type: 'INCREMENT'});
  };

  handleMinusClick = () => {
    this.props.dispatch({type: 'DECREMENT'});
  };

  render() {
    return (
      <div id="Canvas">
        <div className="App">
          <Title className="Title" />
          <div id="Counter-container">
            <Button
              className="Button"
              buttonText="-"
              handleClick={this.handleMinusClick}
            />
            <Count className="Count" countNumber={this.props.count}/>
            <Button
              className="Button"
              buttonText="+"
              handleClick={this.handleAddClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(App);
