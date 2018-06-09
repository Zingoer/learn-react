import React, { Component } from 'react';
import List from './List';

class Mailbox extends Component {
    
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                {this.props.mails.length > 0 &&
                    <h2>
                        You have {this.props.mails.length} unread messages.
                </h2>
                }
                <List mails={this.props.mails}/>
            </div>
        );
    }
}

export default Mailbox;