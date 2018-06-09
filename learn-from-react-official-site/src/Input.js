import React, {Component} from 'react';

class Input extends Component{
    constructor(props){
        super(props);
        this.word = '';
        this.state = {
            text:'default'
        }
    }
    
    onChange = (e) => {
        this.word = e.target.value;
    }

    handleClick = () => {
        this.props.onClick(this.word);
    }

    render(){
        return(
            <div>
                <input onChange={this.onChange} />
                <button onClick={this.handleClick}>Save</button>
            </div>
        );
    }
}

export default Input;