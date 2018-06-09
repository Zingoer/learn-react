import React, {Component} from 'react';

class List extends Component{
    
    render(){
        return(
            <div>
                Messages:  <br  />
                {this.props.mails.length > 0 ? 
                    <ol style={{display:'inline-block'}}>{this.props.mails.map((item) => <li>{item}</li>)}</ol> : 
                    <div>Nothing entered yet!</div>}
            </div>
        )
    }
}

export default List;
