import React from "react";

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      counter: 1
    };
    this.tick = this.tick.bind(this);
    this.handleClickFakeLine = this.handleClickFakeLine.bind(this);
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState((prevState, props) => ({
      date: new Date(),
      counter: prevState.counter + props.increment
    }));
  }

  handleClickFakeLine = (e) => {
    e.preventDefault();
    console.log('The link is clicked');
  }

  render() {
    let greeting='';
    if(this.props.name.toLowerCase() === 'xiaoxi'){
        greeting = `Funny ${this.props.name}`
    }else if(this.props.name.toLowerCase() === 'yiyi'){
        greeting = `Beautiful ${this.props.name}`
    }else{
        greeting = "No Name!"
    }
    return (
      <div>
        <h1>Hello, this is {greeting}!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>The number is increment to {this.state.counter}</h3>
        <a href="#" onClick={this.handleClickFakeLine}>This is a fake link</a>
      </div>
    );
  }
}

export default Clock;