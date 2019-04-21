import React from 'react';
import './Messages.css';

class MessagesClass extends React.Component {
    render () {
        const badge = this.props.unread
            ? <div className='unread_count badge'>{this.props.unread}</div>
            : null;
        return (
            <div className="messages">
                {this.props.name}
                {badge}
            </div>
        );
    }
}

export default MessagesClass;