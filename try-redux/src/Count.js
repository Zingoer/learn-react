import React, {Component} from 'react';
import './Count.css';

class Count extends Component{
    render(){
        return (
            <div id="count">{this.props.countNumber}</div>
        );
    } 
}

export default Count;