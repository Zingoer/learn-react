import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

    render() {
        return (
            <div>
                Messages:  <br />
                {this.props.mails.length > 0
                    ?
                    <ol style={{ display: 'inline-block' }}>
                        {
                            this.props.mails.map((item, index) => <ListItem key={index} value={item} />)
                        }
                    </ol>
                    :
                    <div>Nothing entered yet!</div>}
            </div>
        )
    }
}

export default List;
