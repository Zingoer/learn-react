import React, {Component} from 'react';

class Input extends Component{
    constructor(props){
        super(props);
        this.word = '';
        this.state = {
            text:'I love Yiyi'
        }
    }
    
    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleClick = (event) => {
        this.props.onClick(this.state.text);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleClick}>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Input;