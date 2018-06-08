import React, { Component } from 'react';

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
            </div>
        );
    }
}

export default Mailbox;