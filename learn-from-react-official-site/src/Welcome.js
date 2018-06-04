import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, this is {this.props.name}!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Welcome;