import React, { Component } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleAddClick = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  handleMinusClick = () => {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
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
          <Count className="Count" countNumber={this.state.count} />
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

export default App;
