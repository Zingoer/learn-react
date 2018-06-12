import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleClick = event => {
    this.props.onClick(this.selectInput.value.toUpperCase());
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <label>
          Pick your best friend
          <select 
            defaultValue='xiaoxi' 
            ref={(selectInput) => this.selectInput = selectInput}>
            <option value="yiyi">Yiyi</option>
            <option value="xiaoxi">Xiaoxi</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Input;
