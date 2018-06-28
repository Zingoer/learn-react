import React, {Component} from 'react';
import './index.css';

import Avatar from './Avatar';

export default class Tweet extends Component{
    render(){
        return(
            <div className="tweet">
                <Avatar />
                Tweet
            </div>
        );
    }
}