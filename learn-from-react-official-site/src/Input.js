import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.word = "";
    this.state = {
      text: "xiaoxi"
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleClick = event => {
    this.props.onClick(this.state.text.toUpperCase());
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <label>
          Pick your best friend
          <select value={this.state.text} onChange={this.handleChange}>
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
